let x = 10; //eslint-disable
x = 0b1010;
const y = 10;
const a = 100;

const pesoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

export function escolhaCor(cor: 'Vermelho' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));
