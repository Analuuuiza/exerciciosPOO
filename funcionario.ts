class Funcionario{
    nome: string;
    cargo: string;
    salario: number;
    inss: number = 11;
    ir: number = 7.5;

    constructor(nome: string, cargo: string, salario: number, inss: number, ir: number){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
    }

    Apresentacao(){
        return "Olá " + this.nome + ", seu salário bruto é de: R$" + this.salario + ".";
    }

    totalImpostos(){
        let inss = ((this.inss * this.salario)/100)
        let liquido = (this.salario - inss)
        let ir = ((this.ir * liquido)/100)     
        let total = (inss+ir)
        return total; 
    }

    aplicarAumento(percentual: number){
        let aumento = (this.salario/100)*percentual;
        return this.salario + aumento;
      //  return "Aumento de " + percentual + "% aplicado. Novo salário de: R$" + this.salario.toFixed(2);
    }

    aumentoAplicado(percentual: number){
        let aumento = (this.salario/100)*percentual;
        let salario=  this.salario + aumento;
    return "Aumento de " + percentual + "% aplicado. Novo salário de: R$" + salario.toFixed(2);

    }
    exibirDetalheFuncionario(){
        let total = this.totalImpostos();
        return "Funcionário: " + this.nome + ", Cargo: " + this.cargo + ", Salário Bruto de: R$" + this.salario + ", Impostos: R$" + total + ", Salário Líquido: R$" + (this.salario-total);
    }
}
let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000, 11, 7.5);
console.log(funcionario.Apresentacao());
console.log(funcionario.totalImpostos());
console.log(funcionario.aplicarAumento(10));
console.log(funcionario.aumentoAplicado(10));
console.log(funcionario.exibirDetalheFuncionario());
