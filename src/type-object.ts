const objetoA: {
  chaveA: string;
  chaveB: string;
  chavec?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor a',
  chaveB: 'Valor b',
};

objetoA.cahveA = 'aaaa';
objetoA.cahveB = 'bbbb';
objetoA.cahveC = 'cccc';
objetoA.cahveD = 'dddd';
objetoA.cahveE = 'eeee';

console.log(objetoA);
