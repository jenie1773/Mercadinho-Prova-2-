const mongoose = require("mongoose");

const ProdutosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
});

mongoose.model("Produtos", ProdutosSchema);