import { Router } from 'express';
import { Registration } from '../models/Registration.js';
import { requireAuth } from '../middleware/auth.js';
import { toCsv } from '../utils/csv.js';

const router = Router();

// Public: create a registration
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, house, ticketType, notes } = req.body || {};
    if (!fullName || !email || !house) return res.status(400).json({ error: 'Missing required fields' });

    const reg = await Registration.create({ fullName, email, phone, house, ticketType, notes });
    res.status(201).json({ id: reg._id });
  } catch (e) {
    res.status(500).json({ error: 'Failed to register' });
  }
});

// Admin: list registrations
router.get('/', requireAuth, async (_req, res) => {
  const regs = await Registration.find().sort({ createdAt: -1 }).lean();
  res.json(regs);
});

// Admin: export CSV
router.get('/export', requireAuth, async (_req, res) => {
  const regs = await Registration.find().sort({ createdAt: -1 }).lean();
  const rows = regs.map(r => ({
    FullName: r.fullName,
    Email: r.email,
    Phone: r.phone || '',
    House: r.house,
    Ticket: r.ticketType,
    Notes: r.notes || '',
    CreatedAt: new Date(r.createdAt).toISOString()
  }));
  const csv = toCsv(rows);
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="registrations.csv"');
  res.send(csv);
});

export default router;
