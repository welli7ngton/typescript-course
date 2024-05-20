export class Pessoa {
  static cpfPadrao = '000.000.000-01';
  static idadePadrao = 18;
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi() {
    console.log('OI');
  }

  metodoNormal() {
    console.log('Estou no método normal');
    console.log(Pessoa.cpfPadrao);
    console.log(Pessoa.idadePadrao);
  }
}

const p1 = new Pessoa('wellington', 'Almeida', 21, '123.456.789-01');
p1.metodoNormal();
Pessoa.falaOi();
