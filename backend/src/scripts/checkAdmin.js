import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectDB } from '../config/db.js';
import { Admin } from '../models/Admin.js';

dotenv.config();

(async () => {
  try {
    await connectDB();
    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'Admin!2345#Wizard';
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.log('Admin not found for username:', username);
      process.exit(1);
    }
    const ok = await bcrypt.compare(password, admin.passwordHash);
    console.log('Username:', admin.username);
    console.log('Env password matches stored hash:', ok);
    process.exit(ok ? 0 : 2);
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
})();