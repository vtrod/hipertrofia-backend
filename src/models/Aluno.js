class Aluno {
    constructor(chave_aluno, nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao) {
      this.chave_aluno = chave_aluno;
      this.nome_aluno = nome_aluno;
      this.peso = peso;
      this.altura = altura;
      this.sexo = sexo;
      this.nivel = nivel;
      this.idade = idade;
      this.dias = dias;
      this.horas = horas;
      this.lesao = lesao;
      this.equipdisponivel = equipdisponivel;
      this.limitacao = limitacao;
    }
  }

  module.exports = Aluno;