const { Pool } = require('pg');
const Treino = require('../models/Treinos');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


class TreinoService {
    //metodo get para pegar todos os treinos (provavelmente nao vai ser utilizado)
  static async getTreino() {
      const result = await pool.query('SELECT * FROM treinos');
      return result.rows.map(row => new Treino(
        row.chave_aluno,
        row.segunda, 
        row.terca, 
        row.quarta, 
        row.quinta, 
        row.sexta, 
        row.sabado, 
        row.domingo, 
        row.obs
    ));
    }

    //metodo post para gerar treino
    static async createTreino(chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs) {
      const result = await pool.query('INSERT INTO treinos (chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', 
      [chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs]);
      return result.rows[0];
    }

    //metodo para pegar treino por id
    static async getTreinoById(id) {
      const result = await pool.query('SELECT * FROM treinos WHERE chave = $1', [id]);
      const { chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs } = result.rows[0];
      return new Treino(chave_aluno, segunda, terca, quarta, quinta, sexta, sabado, domingo, obs);
    }

  }
  module.exports = TreinoService;