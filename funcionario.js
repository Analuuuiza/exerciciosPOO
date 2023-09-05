"use strict";
class Funcionario {
    constructor(nome, cargo, salario, inss, ir) {
        this.inss = 11;
        this.ir = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
    }
    Apresentacao() {
        return "Olá " + this.nome + ", seu salário bruto é de: R$" + this.salario + ".";
    }
    totalImpostos() {
        let inss = ((this.inss * this.salario) / 100);
        let liquido = (this.salario - inss);
        let ir = ((this.ir * liquido) / 100);
        let total = (inss + ir);
        return total;
    }
    aplicarAumento(percentual) {
        let aumento = (this.salario / 100) * percentual;
        return this.salario + aumento;
        //  return "Aumento de " + percentual + "% aplicado. Novo salário de: R$" + this.salario.toFixed(2);
    }
    aumentoAplicado(percentual) {
        let aumento = (this.salario / 100) * percentual;
        let salario = this.salario + aumento;
        return "Aumento de " + percentual + "% aplicado. Novo salário de: R$" + salario.toFixed(2);
    }
    exibirDetalheFuncionario() {
        let total = this.totalImpostos();
        return "Funcionário: " + this.nome + ", Cargo: " + this.cargo + ", Salário Bruto de: R$" + this.salario + ", Impostos: R$" + total + ", Salário Líquido: R$" + (this.salario - total);
    }
}
let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000, 11, 7.5);
console.log(funcionario.Apresentacao());
console.log(funcionario.totalImpostos());
console.log(funcionario.aplicarAumento(10));
console.log(funcionario.aumentoAplicado(10));
console.log(funcionario.exibirDetalheFuncionario());
