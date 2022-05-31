const database = require("../models"); // importando automaticamente o arquivo index.js que está dentro da pastas

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarUmaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // depois completar os outros métodos: atualizar e excluir | depois atualizar a rota de turmas

}

module.exports = TurmaController;