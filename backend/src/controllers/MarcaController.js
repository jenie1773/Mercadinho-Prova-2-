const mongoose = require("mongoose");
const Marca = mongoose.model("Marca");

module.exports = {
    async index(req, res) {
        try {
            const marca = await Marca.find();
            return res.status(200).json(marca);
        } catch (err) {
            return res.status(500).json({ error: "Erro ao buscar marca", detalhes: err });
        }
    },

    async create(req, res) {
        try {
            const novaMarca = await Marca.create(req.body);
            return res.status(201).json({ message: "Marca salva com sucesso!", marca: novaMarca });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao salvar marca", detalhes: err });
        }
    },

    async delete(req, res) {
        try {
            const marcaDeletada = await Marca.findByIdAndDelete(req.params.id);

            if (!marcaDeletada) {
                return res.status(404).json({ error: "Marca não encontrada" });
            }

            return res.status(200).json({ message: "Marca deletada com sucesso!" });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao deletar marca", detalhes: err });
        }
    },

    async update(req, res) {
        try {
            const MarcaAtualizada = await Marca.findByIdAndUpdate( req.params.id, req.body, { new: true });

            if (!MarcaAtualizada) {
                return res.status(404).json({ error: "Marca não encontrada" });
            }

            return res.status(200).json({ message: "Marca atualizada com sucesso!", mongoosearca: MarcaAtualizada });
        } catch (err) {
            return res.status(400).json({ error: "Erro ao atualizar marca", detalhes: err });
        }
    }
}
