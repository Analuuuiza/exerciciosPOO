"use strict";
class ContaDeBanco {
    constructor(nomeCota, saldo, titular) {
        this.numeroConta = nomeCota;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaDeBanco {
    constructor(limiteChequeEspecial) {
        super("1", 500, "Ana");
        this.limiteChequeEspecial = limiteChequeEspecial;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        this.saldo = (this.saldo + this.limiteChequeEspecial) + valor;
        console.log("Novo saldo após o depósito: " + this.saldo);
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            console.log("Saque efetuado com sucesso: " + (this.saldo = this.saldo - valor));
        }
        else {
            console.log("Saque não pode ser efetuado com sucesso");
        }
    }
    consultarSaldo() {
        console.log("Saldo atual: " + this.saldo);
        return this.saldo;
    }
}
const contaCorrente = new ContaCorrente(1000);
contaCorrente.depositar(500);
contaCorrente.sacar(1000);
contaCorrente.consultarSaldo();
