const { Categoria } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const categoria = await Categoria.findAll();
      return res.status(200).json(categoria);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar categoria", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const novaCategoria = await Categoria.create(req.body);
      return res.status(201).json({ message: "Categoria salva com sucesso!", categoria: novaCategoria });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar categoria", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const categoriaDeletada = await Categoria.destroy({ where: { id: req.params.id } });

      if (categoriaDeletada === 0) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      return res.status(200).json({ message: "Categoria deletada com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar categoria", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await Categoria.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      const categoriaAtualizada = await Categoria.findByPk(req.params.id);
      return res.status(200).json({ message: "Categoria atualizada com sucesso!", categoria: categoriaAtualizada });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar categoria", detalhes: err.message });
    }
  }
};
