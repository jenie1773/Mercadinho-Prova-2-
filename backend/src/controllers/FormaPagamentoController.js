const { FormaPagamento } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const formaPagamento = await FormaPagamento.findAll();
      return res.status(200).json(formaPagamento);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar forma de pagamento", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const novaForma = await FormaPagamento.create(req.body);
      return res.status(201).json({ message: "Forma de pagamento salva com sucesso!", formaPagamento: novaForma });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar forma de pagamento", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const formaDeletada = await FormaPagamento.destroy({ where: { id: req.params.id } });

      if (formaDeletada === 0) {
        return res.status(404).json({ error: "Forma de pagamento não encontrada" });
      }

      return res.status(200).json({ message: "Forma de pagamento deletada com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar forma de pagamento", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await FormaPagamento.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Forma de pagamento não encontrada" });
      }

      const formaAtualizada = await FormaPagamento.findByPk(req.params.id);
      return res.status(200).json({ message: "Forma de pagamento atualizada com sucesso!", formaPagamento: formaAtualizada });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar forma de pagamento", detalhes: err.message });
    }
  }
};
