"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitacao = " Já posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitacao = " Não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos." + msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("minha(s) comida(s) favoritas(s)");
        for (let i = 0; i < this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}
let pessoa1 = new Pessoa("Ana", 16, ["doguinho", "macarrão"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
