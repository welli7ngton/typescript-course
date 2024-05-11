enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores.ROXO);
console.log(Cores.VERDE);
console.log(Cores.ROSA);

export function chooseColor(color: Cores): void {
  console.log(Cores[color], 'estou na funcao');
}

chooseColor(Cores.ROXO);
