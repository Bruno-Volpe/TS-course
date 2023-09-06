class CarrinhoDeCompras {
    private readonly produtos: Produto[] = []

    inserirProduto(...produtos: Produto[]): void {
        for( let produto of produtos) {
            this.produtos.push(produto)
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
    }
}

class Produto {
    constructor (
        private readonly nome: string,
        private readonly _preco: number
    ) {}

    get preco(): number {
        return this._preco
    }
}
