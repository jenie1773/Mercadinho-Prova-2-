const { Usuario } = require("../../models/Usuario");

module.exports = {
  async index(req, res) {
    try {
      const usuario = await Usuario.findAll();
      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao buscar usuário", detalhes: err.message });
    }
  },

  async create(req, res) {
    try {
      const bcrypt = require("bcryptjs");
      const senhaHash = await bcrypt.hash(req.body.senha, 8);

      const novoUsuario = await Usuario.create({...req.body, senha: senhaHash});
      return res.status(201).json({ message: "Usuário salva com sucesso!", categoria: novoUsuario });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar usuário", detalhes: err.message });
    }
  },

  async delete(req, res) {
    try {
      const usuarioDeletado = await Usuario.destroy({ where: { id: req.params.id } });

      if (usuarioDeletado === 0) {
        return res.status(404).json({ error: "Usuário não encontrada" });
      }

      return res.status(200).json({ message: "Usuário deletada com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar usuário", detalhes: err.message });
    }
  },

  async update(req, res) {
    try {
      const [updatedRows] = await Usuario.update(req.body, {
        where: { id: req.params.id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: "Usuário não encontrada" });
      }

      const usuarioAtualizado = await Usuario.findByPk(req.params.id);
      return res.status(200).json({ message: "Usuário atualizada com sucesso!", categoria: usuarioAtualizado });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar usuário", detalhes: err.message });
    }
  }
};
