type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'vermelho' | 'verde' | 'azul';
type CorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';

type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Wellington',
  idade: 21,
  salario: 200_000,
};

export function addCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(addCorPreferida(pessoa, 'vermelho'));
// console.log(addCorPreferida(pessoa, 'aaa')); TYPE ERROR
