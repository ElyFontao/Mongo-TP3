// src/models/SuperHero.mjs
import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: { type: String },
  poderes: { type: String },
  aliados: { type: String },
  enemigos: { type: String },
  creador: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Aquí especificamos explícitamente la colección "Grupo-01"
export default mongoose.model('SuperHero', superheroSchema, 'Grupo-01');
