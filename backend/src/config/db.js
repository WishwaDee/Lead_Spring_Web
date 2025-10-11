import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI missing');
  mongoose.set('strictQuery', true);
  try {
    const opts = process.env.MONGO_DB ? { dbName: process.env.MONGO_DB } : undefined;
    await mongoose.connect(uri, opts);
    console.log('MongoDB connected:', mongoose.connection.name);
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    throw e;
  }
}
