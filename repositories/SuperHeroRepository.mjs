// src/repositories/SuperHeroRepository.mjs
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    return await SuperHero.find({ [atributo]: valor });
  }

  async obtenerMayoresDe38() {
    return await SuperHero.find({ edad: { $gt: 38 } });
  }
}

export default new SuperHeroRepository();
