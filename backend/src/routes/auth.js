const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Usuario } = require("../models"); // importa teu model de Usuario
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    return res.status(400).json({ erro: "Usuário não encontrado" });
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

  if (!senhaCorreta) {
    return res.status(400).json({ erro: "Senha inválida" });
  }

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return res.json({
    usuario: { id: usuario.id, email: usuario.email },
    token,
  });
});

module.exports = router;
