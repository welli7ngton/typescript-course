function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Wellington', 'Almeida');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  exibirNome(): void {
    console.log(this.nome, this.sobrenome);
  },
};

pessoa.exibirNome();
