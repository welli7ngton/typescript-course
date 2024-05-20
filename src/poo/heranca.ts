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
  getNomeCompleto(): string {
    return 'Isso vem do Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Wellington', 'Almeida', 21, '000.000.000-00');
const aluno = new Aluno('Wellington', 'Almeida', 21, '000.000.000-00');
const cliente = new Cliente('Wellington', 'Almeida', 21, '000.000.000-00');

console.log(pessoa);
console.log(aluno);
console.log(aluno.getIdade());
console.log(cliente);
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
