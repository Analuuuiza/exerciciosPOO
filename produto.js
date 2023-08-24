"use strict";
class Produtos {
    constructor(produto, preco) {
        this.produto = produto;
        this.preco = preco;
    }
    detalheDoProduto() {
        return "Produto: " + this.produto + "Preço: R$ " + this.preco;
    }
    descontoDoProduto(desconto) {
        return "Desconto de " + desconto + "% aplicado. Novo preço R$" + (this.preco - (this.preco * desconto) / 100);
    }
}
let produto1 = new Produtos("Iphone 14 ", 5966.00);
let produto2 = new Produtos("Tablet ", 2500.00);
let produto3 = new Produtos("Fones ", 500.00);
console.log(produto1.detalheDoProduto());
console.log(produto1.descontoDoProduto(15));
console.log(produto2.detalheDoProduto());
console.log(produto2.descontoDoProduto(10));
console.log(produto3.detalheDoProduto());
console.log(produto3.descontoDoProduto(5));
