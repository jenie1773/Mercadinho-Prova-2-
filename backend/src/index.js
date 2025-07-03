const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require("require-dir");
const uri = "mongodb://127.0.0.1:27017";
const app = express();

app.use(express.json());
app.use(cors());
require('dotenv').config();

mongoose.connect(uri, {dbName: 'api_projeto'});

requireDir("./models");

app.use("/api", require("./routes/routes"));

app.listen(3000, () => {
    console.log("🚀 Servidor rodando na porta 3000");
});
