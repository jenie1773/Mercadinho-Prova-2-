const { Produto } = require("../models");

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

      const produto = await Produto.findByPk(req.params.id, {
        include: {
          model: Marca,
          as: 'marcaId',
          attributes: ['id', 'nome'], 
        },
      });
  
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
      const { nome, preco, codigo, marcaId, categoriaId, unidadeMedidaId, pesoEmbalagem, dataValidade } = req.body;
  
      const imagemBuffer = req.file ? req.file.buffer : null;

      const produto = await Produto.create({
        nome,
        preco,
        codigo,
        marcaId,
        categoriaId,
        unidadeMedidaId,
        pesoEmbalagem,
        dataValidade,
        imagem: imagemBuffer
      });
  
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
