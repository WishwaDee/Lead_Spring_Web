import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lead_spring';
const PORT = process.env.PORT || 4000;

const client = new MongoClient(MONGO_URI, {});

async function start() {
  await client.connect();
  const dbName = new URL(MONGO_URI).pathname.replace('/', '') || process.env.MONGO_DB || 'lead_spring';
  const db = client.db(dbName);
  const participants = db.collection('participants');

  const app = express();
  app.use(express.json());

  app.get('/api/health', (_req, res) => res.json({ ok: true }));

  app.get('/api/participants', async (_req, res) => {
    try {
      const docs = await participants.find().sort({ registered_at: -1 }).toArray();
      res.json(docs);
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  app.post('/api/participants', async (req, res) => {
    try {
      const payload = {
        ...req.body,
        registered_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
      };
      const result = await participants.insertOne(payload);
      const doc = await participants.findOne({ _id: result.insertedId });
      res.status(201).json(doc);
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  app.delete('/api/participants/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await participants.deleteOne({ _id: new ObjectId(id) });
      res.json({ deleted: true });
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  const server = app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://localhost:${PORT}`);
  });

  const shutdown = async () => {
    await client.close();
    server.close(() => process.exit(0));
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start server', err);
  process.exit(1);
});