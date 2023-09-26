abstract class Empregado{
    public nome: string;
    protected salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;
    }

class Gerente extends Empregado{
    constructor(){
        super("Rodrigo", 5000);
    }

    calcularSalarioMensal(): number {
    return this.salario + (this.salario*10)/100;
    }
}

class Desenvolvedor extends Empregado{
    constructor(){
        super("Roberson", 3000);
    }

    calcularSalarioMensal(): number {
        return this.salario;
    }
}

const gerente = new Gerente();
console.log("O salário do " + gerente.nome + " é de " + gerente.calcularSalarioMensal() + " reais");

const desenvolvedor = new Desenvolvedor();
console.log("O salario do " + desenvolvedor.nome + " é de " + desenvolvedor.calcularSalarioMensal() + "reais");
