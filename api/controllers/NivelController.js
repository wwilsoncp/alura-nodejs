const database = require("../models"); // importando automaticamente o arquivo index.js que está dentro da pastas

class NivelController {

  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // depois completar os outros métodos: criar, atualizar e excluir | depois atualizar a rota de niveis
}

module.exports = NivelController