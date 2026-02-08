import mongoose from 'mongoose';

function resolveMongoUri() {
  const candidates = [
    process.env.MONGO_URI,
    process.env.MONGODB_URI,
    process.env.MONGO_URL,
    process.env.DATABASE_URL
  ];

  const uri = candidates.find(Boolean);
  if (!uri) {
    throw new Error('MongoDB connection string missing (set MONGO_URI or MONGODB_URI).');
  }
  return uri;
}

function resolveDbName() {
  return (
    process.env.MONGO_DB ||
    process.env.MONGODB_DB ||
    process.env.DB_NAME ||
    undefined
  );
}

export async function connectDB() {
  const uri = resolveMongoUri();
  const dbName = resolveDbName();

  mongoose.set('strictQuery', true);

  try {
    const opts = dbName ? { dbName } : undefined;
    await mongoose.connect(uri, opts);
    console.log('MongoDB connected:', mongoose.connection.name || dbName || '(default)');
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    throw e;
  }
}
