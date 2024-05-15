const AlunoService = require('../services/AlunoService');

class AlunoController {
  static async getAluno(req, res) {
    try {
      const aluno = await AlunoService.getAluno();
      res.json(aluno);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar os dados do aluno.' });
    }
  }

  static async createAluno(req, res) {
    try {
      const { nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao } = req.body;
      const newAluno = await AlunoService.createAluno(nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao);
      res.json(newAluno);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocorreu um erro ao registrar o aluno.' });
    }
  }

  static async getAlunoById(req, res) {
    try {
      const id = req.params.id;
      const aluno = await AlunoService.getAlunoById(id);
      res.json(aluno);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar o aluno.' });
    }
  }
}
module.exports = AlunoController;