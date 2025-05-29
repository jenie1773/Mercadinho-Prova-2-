const mongoose = require("mongoose");

const EstoqueSchema = new mongoose.Schema({
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
});

mongoose.model("Estoque", EstoqueSchema);