// src/routes/superHeroRoutes.mjs
import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe38Controller,
} from '../controllers/superheroesController.mjs';

const router = express.Router();

// Rutas específicas primero
router.get('/heroes/mayores-38', obtenerSuperheroesMayoresDe38Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePorIdController); // Más genérica
router.get('/heroes', obtenerTodosLosSuperheroesController);

export default router;
