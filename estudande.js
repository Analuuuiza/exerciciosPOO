"use strict";
class Estudante {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    media() {
        let totalnotas = 0;
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            totalnotas = totalnotas + this.notas[i];
        }
        media = totalnotas / this.notas.length;
        let msgMediaNotas = "Parabéns " + this.nome + " sua média é: " + media + " e você está aprovado.";
        if (media < 7) {
            msgMediaNotas = this.nome + " , sua média é: " + media + "e você precisa estudar mais para melhorar seu desempenho.";
        }
        return msgMediaNotas;
    }
}
let mediaEstudante = new Estudante("Maria", 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(mediaEstudante.media());
