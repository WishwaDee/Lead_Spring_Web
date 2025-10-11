import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectDB } from '../config/db.js';
import { Admin } from '../models/Admin.js';

dotenv.config();

(async () => {
  try {
    await connectDB();
    const username = (process.env.ADMIN_USERNAME || 'admin').trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD || 'change-me';
    const existing = await Admin.findOne({ username });
    if (existing) {
      console.log('Admin already exists:', username);
      process.exit(0);
    }
    const passwordHash = await bcrypt.hash(password, 12);
    await Admin.create({ username, passwordHash });
    console.log('Admin created:', username);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
