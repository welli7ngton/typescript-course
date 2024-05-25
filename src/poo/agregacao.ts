export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  constructor() {}

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const p1 = new Produto('p1', 1.777);
const p2 = new Produto('p2', 13.46);
const p3 = new Produto('p3', 10320.42564);
const p4 = new Produto('p4', 10000.324);

const c1 = new CarrinhoDeCompras();

c1.inserirProdutos(p1);
c1.inserirProdutos(p2);
c1.inserirProdutos(p3);
c1.inserirProdutos(p4);

console.log(c1.quantidadeDeProdutos());
console.log(c1.valorTotal());
