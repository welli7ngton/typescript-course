export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCPf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getCPf(): string {
    console.log('Fazendo algo andes de acessar a super class.');
    // acessando:
    return super.getCPf() + ' retornando a execução da super classe.';
  }
  getNomeCompleto(): string {
    return 'Isso vem do Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Wellington', 'Almeida', 21, '000.000.000-00', '001');

aluno.getCPf();
console.log(aluno);
