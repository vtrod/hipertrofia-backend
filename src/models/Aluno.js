class Aluno {
    constructor(chave_aluno, nome_aluno, peso, altura, sexo, nivel, idade, dias, horas, lesao, equipdisponivel, limitacao, peso1, peso2, peso3) {
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
      this.peso1 = peso1;
      this.peso2 = peso2;
      this.peso3 = peso3;
    }
  }

  module.exports = Aluno;