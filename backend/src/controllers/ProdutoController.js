const Produto = require('../models/Produto');

module.exports = {
  async index(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.json(produtos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.json(produto);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const produto = await Produto.create(req.body);
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await produto.update(req.body);
      return res.json(produto);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await produto.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
