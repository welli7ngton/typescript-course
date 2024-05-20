export class Empresa {
  public readonly nome: string; // public é redundante, por padrão se um atributo não tem um modificador de acesso ele é public
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): void {
    this.colaboradores.forEach((colaborador, id) => {
      console.log(id, colaborador.nome, colaborador.sobrenome);
    });
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const udemy = new Empresa('Udemy', '1111111111111111');
const c1 = new Colaborador('Wellington', 'Almeida');
const c2 = new Colaborador('Maria', 'Miranda');
const c3 = new Colaborador('Pedro', 'Hernrique');
console.log(udemy);
console.log(udemy.nome);

udemy.adicionaColaborador(c1);
udemy.adicionaColaborador(c2);
udemy.adicionaColaborador(c3);

udemy.mostraColaboradores();
console.log(udemy.popColaborador());
