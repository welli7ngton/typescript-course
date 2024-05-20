export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  public get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  public set cpf(value: string) {
    this._cpf = value;
  }
}

const p1 = new Pessoa('Wellington', 'Almeida', 21, '123.456.789-00');

console.log(p1.cpf);
p1.cpf = '000.000.000-99';
console.log(p1.cpf);
