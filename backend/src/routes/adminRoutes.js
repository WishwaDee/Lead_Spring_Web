import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin.js';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const usernameInput = typeof req.body?.username === 'string' ? req.body.username.trim() : '';
    const password = typeof req.body?.password === 'string' ? req.body.password : '';

    if (!usernameInput || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }

    const normalizedUsername = usernameInput.toLowerCase();
    const admin = await Admin.findOne({ username: normalizedUsername });
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    if (!process.env.JWT_SECRET) return res.status(500).json({ error: 'Server config error' });
    const token = jwt.sign({ sub: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token });
  } catch (e) {
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
