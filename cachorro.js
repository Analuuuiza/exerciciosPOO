"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return " eu sou " + this.nome + "um "
            + this.raca + "de " + this.idade + " anos ";
    }
    apresentarPara(humano) {
        return "Olá " + humano + " ,eu sou " + this.nome + "um "
            + this.raca + "de " + this.idade + " anos ";
    }
}
let bella = new Cachorro("Bella ", "Estopinha ", 3);
let logan = new Cachorro("Logan ", "Bulldog Francês ", 2);
console.log(bella.nome);
console.log(logan.nome);
console.log(bella.apresentar());
console.log(logan.apresentar());
console.log(bella.apresentarPara("Ana Luiza"));
console.log(logan.apresentarPara("Ana Luiza"));
