"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionar(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }
    calcularValorTotal() {
        let valorTotal = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            valorTotal = valorTotal + this.produtosDoCarrinho[i].preco;
        }
        return valorTotal.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do carrinho: ");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome + "R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(nomeDoProduto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter((item) => item.nome !== nomeDoProduto);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find((item) => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionar(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado no estoque da loja";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto.nome);
    }
    exibirProdutoDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
//Criando Produtos
const ProdutoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const ProdutoLoja2 = new ProdutoLoja("Calça", 49.90);
const ProdutoLoja3 = new ProdutoLoja("Sapato", 79.00);
const ProdutoLoja4 = new ProdutoLoja("Meia", 19.99);
//Criando a Loja
const minhaLoja = new Loja();
//Adicionando Produto do Estoque
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);
//Adicionando Produto do Carrinho de Compras
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
//Remover Produto do Carrinho de Compras
minhaLoja.removerProdutoDoCarrinho(ProdutoLoja3);
//Remover Produto do Estoque da Loja
minhaLoja.removerProdutoDoEstoque(ProdutoLoja3.nome);
//Exibindo Produtos do Carrinho de Compras
minhaLoja.exibirProdutoDoCarrinho();
//Exibindo Valor Total do Carrinho
console.log("Total do carrinho de compras: R$ " + minhaLoja.carrinhoDeCompra.calcularValorTotal());
