const mongoose = require("mongoose");
const Produtos = mongoose.model("Produtos");

module.exports = {
    async index(req, res) {
        try {
            const produtos = await Produtos.find();
            return res.status(200).json(produtos);
        } catch (err) {
            return res.status(500).json({ error: "Erro ao buscar produtos", detalhes: err });
        }
    },

    async create(req, res) {
        try {
            const novoProduto = await Produtos.create(req.body);
            return res.status(201).json({ message: "Produto salvo com sucesso!", produto: novoProduto });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao salvar produto", detalhes: err });
        }
    },

    async delete(req, res) {
        try {
            const produtoDeletado = await Produtos.findByIdAndDelete(req.params.id);

            if (!produtoDeletado) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            return res.status(200).json({ message: "Produto deletado com sucesso!" });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao deletar produto", detalhes: err });
        }
    },

    async update(req, res) {
        try {
            const ProdutosAtualizado = await Produtos.findByIdAndUpdate( req.params.id, req.body, { new: true });
            
            if (!ProdutosAtualizado) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            return res.status(200).json({ message: "Produto atualizado com sucesso!", produto: ProdutosAtualizado });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao atualizar produto", detalhes: err });
        }
    }
}
