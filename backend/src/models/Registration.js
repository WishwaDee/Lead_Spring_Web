import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, trim: true },
    house: {
      type: String,
      enum: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff', 'Muggle'],
      required: true
    },
    ticketType: { type: String, enum: ['Standard', 'VIP'], default: 'Standard' },
    notes: { type: String, trim: true }
  },
  { timestamps: true }
);

export const Registration = mongoose.model('Registration', RegistrationSchema);
