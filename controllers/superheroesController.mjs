// src/controllers/superheroesController.mjs

import mongoose from 'mongoose';
import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe38,
} from '../services/superheroesService.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;

    // Validar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ mensaje: 'ID inválido' });
    }

    const superheroe = await obtenerSuperheroePorId(id);
    if (!superheroe) return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
    res.json(superheroe);
  } catch (error) {
    res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
  }
}
  export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
      const superheroes = await obtenerTodosLosSuperheroes();
      res.json(superheroes);
    } catch (error) {
      res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
  }
  
  export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
      const { atributo, valor } = req.params;
      const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
      res.json(superheroes);
    } catch (error) {
      res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
  }
  
  export async function obtenerSuperheroesMayoresDe38Controller(req, res) {
    try {
      const superheroes = await obtenerSuperheroesMayoresDe38();
      res.json(superheroes);
    } catch (error) {
      res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 38', error: error.message });
    }
  }
  