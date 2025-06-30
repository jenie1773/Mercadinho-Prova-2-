const { UnidadeMedida } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const unidadeMedida = await UnidadeMedida.findAll();
      return res.status(200).json(unidadeMedida);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar unidade de medida", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const novaUnidade = await UnidadeMedida.create(req.body);
      return res.status(201).json({ message: "Unidade de medida salvo com sucesso!", unidadeMedida: novaUnidade });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar unidade de medida", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const unidadeDeletada = await UnidadeMedida.destroy({ where: { id: req.params.id } });

      if (unidadeDeletada === 0) {
        return res.status(404).json({ error: "Unidade de medida não encontrado" });
      }

      return res.status(200).json({ message: "Unidade de medida deletado com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar unidade de medida", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await UnidadeMedida.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Unidade de medida não encontrado" });
      }

      const unidadeAtualizada = await UnidadeMedida.findByPk(req.params.id);
      return res.status(200).json({ message: "Unidade de medida atualizado com sucesso!", unidadeMedida: unidadeAtualizada });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar unidade de medida", detalhes: err.message });
    }
  }
};
