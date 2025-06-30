const { Estoque } = require("../models/Estoque"); 

module.exports = {
  async index(req, res) {
    try {
      const estoque = await Estoque.findAll();
      return res.status(200).json(estoque);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar estoque", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const novoEstoque = await Estoque.create(req.body);
      return res.status(201).json({ message: "Estoque salvo com sucesso!", estoque: novoEstoque });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar estoque", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const estoqueDeletado = await Estoque.destroy({ where: { id: req.params.id } });

      if (estoqueDeletado === 0) {
        return res.status(404).json({ error: "Estoque não encontrado" });
      }

      return res.status(200).json({ message: "Estoque deletado com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar estoque", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await Estoque.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Estoque não encontrado" });
      }

      const estoqueAtualizado = await Estoque.findByPk(req.params.id);
      return res.status(200).json({ message: "Estoque atualizado com sucesso!", estoque: estoqueAtualizado });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar estoque", detalhes: err.message });
    }
  }
};
