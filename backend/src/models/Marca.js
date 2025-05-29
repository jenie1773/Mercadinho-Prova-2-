const mongoose = require("mongoose");

const MarcaSchema = new mongoose.Schema({
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

mongoose.model("Marca", MarcaSchema);