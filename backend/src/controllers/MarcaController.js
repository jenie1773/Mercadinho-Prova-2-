const { Marca } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const marca = await Marca.findAll();
      return res.status(200).json(marca);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar marca", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const novaMarca = await Marca.create(req.body);
      return res.status(201).json({ message: "Marca salva com sucesso!", marca: novaMarca });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar marca", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const marcaDeletada = await Marca.destroy({ where: { id: req.params.id } });

      if (marcaDeletada === 0) {
        return res.status(404).json({ error: "Marca não encontrada" });
      }

      return res.status(200).json({ message: "Marca deletada com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar marca", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await Marca.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Marca não encontrada" });
      }

      const marcaAtualizada = await Marca.findByPk(req.params.id);
      return res.status(200).json({ message: "Marca atualizada com sucesso!", marca: marcaAtualizada });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar marca", detalhes: err.message });
    }
  }
};
