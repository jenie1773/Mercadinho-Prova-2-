const { Compra } = require("../models/Compra");

module.exports = {
  async index(req, res) {
    try {
      const compra = await Compra.findAll();
      return res.status(200).json(compra);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar compra", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const novaCompra = await Compra.create(req.body);
      return res.status(201).json({ message: "Compra salva com sucesso!", compra: novaCompra });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar compra", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const compraDeletada = await Compra.destroy({ where: { id: req.params.id } });

      if (compraDeletada === 0) {
        return res.status(404).json({ error: "Compra não encontrada" });
      }

      return res.status(200).json({ message: "Compra deletada com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar compra", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await Compra.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Compra não encontrada" });
      }

      const compraAtualizada = await Compra.findByPk(req.params.id);
      return res.status(200).json({ message: "Compra atualizada com sucesso!", compra: compraAtualizada });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar compra", detalhes: err.message });
    }
  }
};
