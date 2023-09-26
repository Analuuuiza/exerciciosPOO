abstract class ContaDeBanco {
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(nomeCota: string, saldo: number, titular: string) {
        this.numeroConta = nomeCota;
        this.saldo = saldo;
        this.titular = titular;
    }

    abstract depositar(valor: number): void;

    abstract sacar(valor: number): void;

    abstract consultarSaldo(): number;
}

class ContaCorrente extends ContaDeBanco {
    protected limiteChequeEspecial: number;

    constructor(limiteChequeEspecial: number) {
        super("1", 500, "Ana");
        this.limiteChequeEspecial = limiteChequeEspecial

        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    depositar(valor: number): void {
        this.saldo = (this.saldo + this.limiteChequeEspecial) + valor
        console.log("Novo saldo após o depósito: " + this.saldo);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            console.log("Saque efetuado com sucesso: " + (this.saldo = this.saldo - valor))

        } else {
            console.log("Saque não pode ser efetuado com sucesso")
        }
    }

    consultarSaldo(): number {
        console.log("Saldo atual: " + this.saldo);
        return this.saldo
    }
}

const contaCorrente = new ContaCorrente(1000);
contaCorrente.depositar(500);
contaCorrente.sacar(1000);
contaCorrente.consultarSaldo();