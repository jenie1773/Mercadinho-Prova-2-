const mongoose = require("mongoose");
const Estoque = mongoose.model("Estoque");

module.exports = {
    async index(req, res) {
        try {
            const estoque = await Estoque.find();
            return res.status(200).json(estoque);
        } catch (err) {
            return res.status(500).json({ error: "Erro ao buscar estoque", detalhes: err });
        }
    },

    async create(req, res) {
        try {
            const novoEstoque = await Estoque.create(req.body);
            return res.status(201).json({ message: "Estoque salvo com sucesso!", estoque: novoEstoque });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao salvar estoque", detalhes: err });
        }
    },

    async delete(req, res) {
        try {
            const estoqueDeletado = await Estoque.findByIdAndDelete(req.params.id);

            if (!estoqueDeletado) {
                return res.status(404).json({ error: "Estoque não encontrado" });
            }

            return res.status(200).json({ message: "Estoque deletado com sucesso!" });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao deletar estoque", detalhes: err });
        }
    },

    async update(req, res) {
        try {
            const EstoqueAtualizado = await Estoque.findByIdAndUpdate( req.params.id, req.body, { new: true });

            if (!EstoqueAtualizado) {
                return res.status(404).json({ error: "Estoque não encontrado" });
            }

            return res.status(200).json({ message: "Estoque atualizado com sucesso!", estoque: EstoqueAtualizado });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao atualizar estoque", detalhes: err });
        }
    }
}
