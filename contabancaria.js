"use strict";
class contaBancaria {
    constructor(nomeDoTitular, saldoAtual) {
        this.nomeDoTitular = nomeDoTitular;
        this.saldoAtual = saldoAtual;
    }
    saldoInicial() {
        return "Olá " + this.nomeDoTitular + ", " + "atualmente você tem " + "R$" + this.saldoAtual + " de saldo em sua conta.";
    }
    depositoDaConta(deposito) {
        this.saldoAtual = this.saldoAtual + deposito;
        return "Feito deposito de R$" + deposito + "," + " saldo atual de: R$" + this.saldoAtual;
    }
    saldoDaConta() {
        return this.nomeDoTitular + " possui " + "R$" + this.saldoAtual + " em sua conta bancária atualmente.";
    }
    realizarSaque(saque) {
        let msgSacarSaldo = "Saque aprovado. ";
        if (saque > this.saldoAtual) {
            msgSacarSaldo = "Saque negado ";
            return msgSacarSaldo;
        }
        else {
            this.saldoAtual = this.saldoAtual - saque;
            return msgSacarSaldo + saque + " Seu saldo atual é: " + this.saldoAtual;
        }
    }
}
let minhaConta = new contaBancaria("João", 1000);
console.log(minhaConta.saldoInicial());
console.log(minhaConta.depositoDaConta(500));
console.log(minhaConta.saldoDaConta());
console.log(minhaConta.realizarSaque(200));
console.log(minhaConta.realizarSaque(1500));
let minhaConta2 = new contaBancaria("Ana", 10000);
console.log(minhaConta2.saldoInicial());
console.log(minhaConta2.depositoDaConta(500));
console.log(minhaConta2.saldoDaConta());
console.log(minhaConta2.realizarSaque(200));
console.log(minhaConta2.realizarSaque(1500));
let minhaConta3 = new contaBancaria("Julia", 7000);
console.log(minhaConta3.saldoInicial());
console.log(minhaConta3.depositoDaConta(500));
console.log(minhaConta3.saldoDaConta());
console.log(minhaConta3.realizarSaque(200));
console.log(minhaConta3.realizarSaque(1500));
