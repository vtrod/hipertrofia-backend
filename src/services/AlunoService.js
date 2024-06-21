const { Pool } = require('pg');
const Aluno = require('../models/Aluno');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


class AlunoService {
    
  static async getAluno() {
      const result = await pool.query('SELECT * FROM alunos');
      return result.rows.map(row => new Aluno(
        row.chave_aluno,
        row.nome_aluno, 
        row.peso, 
        row.altura, 
        row.sexo, 
        row.nivel,
        row.idade, 
        row.dias, 
        row.horas, 
        row.lesao,
        row.equipdisponivel,
        row.limitacao
    ));
    }

    static async createAluno(nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao) {
      const result = await pool.query('INSERT INTO alunos (nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *', 
      [nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao]);
      return result.rows[0];
    }

        //metodo para pegar aluno por id
        static async getAlunoById(id) {
            const result = await pool.query('SELECT * FROM alunos WHERE chave_aluno = $1', [id]);
            const { chave_aluno, nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao} = result.rows[0];
            return new Aluno(chave_aluno, nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao);
          }

  }
  module.exports = AlunoService;