import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import registrationRoutes from './routes/registrationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/registrations', registrationRoutes);
app.use('/api/admin', adminRoutes);

const port = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on :${port}`));
});
