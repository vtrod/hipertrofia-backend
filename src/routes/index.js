const express = require('express');
const TreinoController = require('../controllers/TreinoController');
const AlunoController = require('../controllers/AlunoController');

const router = express.Router();

router.get('/treino', TreinoController.getTreino);
router.get('/treino/:id', TreinoController.getTreinoById);
router.post('/treino', TreinoController.createTreino);
router.post('/aluno', AlunoController.createAluno);
router.get('/aluno', AlunoController.getAluno);
router.get('/aluno/:id', AlunoController.getAlunoById);
router.get('/alunotreino/:id', TreinoController.getTreinoByAlunoId);

module.exports = router;