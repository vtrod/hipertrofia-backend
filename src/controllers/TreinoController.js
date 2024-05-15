const TreinoService = require('../services/TreinoService');

class TreinoController {
  //pegar todos os treinos
  static async getTreino(req, res) {
    try {
      const treino = await TreinoService.getTreino();
      res.json(treino);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar os dados do treino.' });
    }
  }
  //metodo de post para o treino criado
  static async createTreino(req, res) {
    try {
      const { chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs } = req.body;
      const newTreino = await TreinoService.createTreino(chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs);
      res.json(newTreino);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocorreu um erro ao criar o treino.' });
    }
  }
  //pegar treino por id
  static async getTreinoById(req, res) {
    try {
      const id = req.params.id;
      const treino = await TreinoService.getTreinoById(id);
      res.json({...treino});
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar o treino.' });
    }
  }
}
module.exports = TreinoController;