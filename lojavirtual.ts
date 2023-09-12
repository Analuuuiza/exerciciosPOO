class ProdutoLoja {
    nomeProduto: string;
    precoProduto: number;

    constructor(nomeProduto: string, precoProduto: number) {
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }
}

class CarrinhoDeCompras {
    produtos: ProdutoLoja[] = [];
    constructor() {

    }

    adicionarProduto(produto: ProdutoLoja) {
        this.produtos.push(produto);
    }

    remover(produto: ProdutoLoja) {
        this.produtos = this.produtos.filter((item) => item.nomeProduto !== produto.nomeProduto);
        return "Produto removido";
    }

    visualizar(){
        console.log("seus produtos são: ");
        for(let i=0; i < this.produtos.length; i++){
            console.log(this.produtos[i].nomeProduto);
    }
    }

    calcular() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total = total + this.produtos[i].precoProduto;
        }
        return total;
    }
}

class Loja {
    estoque: ProdutoLoja[] = [];
    carrinho = new CarrinhoDeCompras();
    constructor() {

    }

    adicionarAoEstoque(produto: ProdutoLoja) {
        this.estoque.push(produto);
        return "Produto adicionado";
    }


    removerDoEstoque(produto: ProdutoLoja) {
        this.estoque = this.estoque.filter((item) => item.nomeProduto !== produto.nomeProduto);
        return "Produto removido do estoque da loja";
    }

    adicionarAoCarrinho(produto: ProdutoLoja) {
        const produtoEncontrado = this.estoque.find(item => item.nomeProduto == produto.nomeProduto);
        if (produtoEncontrado){
        this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }else{
            return "Produto não encotrado no estoque";
        }
    }

    removerDoCarrinho(produto: ProdutoLoja){
        return this.carrinho.remover(produto);
    }

    exibir(){
        return this.carrinho.visualizar();

    }

    valorTotalCarrinho(){
        return this.carrinho.calcular();
    }
}

let produtoLoja1 = new ProdutoLoja("Garrafinha", 29.90);
let produtoLoja2 = new ProdutoLoja("Almofada", 45.00);
let produtoLoja3 = new ProdutoLoja("Caixa organizadora", 30.00);
let produtoLoja4 = new ProdutoLoja("Cesto de roupa", 53.90);
let produtoLoja5 = new ProdutoLoja("Cabide", 10.00);



const loja = new Loja();
console.log(loja.adicionarAoEstoque(produtoLoja1))
console.log(loja.adicionarAoEstoque(produtoLoja2))
console.log(loja.adicionarAoEstoque(produtoLoja3))
console.log(loja.adicionarAoEstoque(produtoLoja4))

console.log(loja.adicionarAoCarrinho(produtoLoja1))
console.log(loja.adicionarAoCarrinho(produtoLoja2))
console.log(loja.adicionarAoCarrinho(produtoLoja3))
console.log(loja.adicionarAoCarrinho(produtoLoja4))

console.log(loja.adicionarAoEstoque(produtoLoja5))
console.log(loja.adicionarAoCarrinho(produtoLoja5))

console.log(loja.exibir());

console.log(loja.valorTotalCarrinho());

console.log(loja.removerDoCarrinho(produtoLoja3));
console.log(loja.removerDoEstoque(produtoLoja3));

console.log(loja.exibir());

console.log(loja.valorTotalCarrinho());










