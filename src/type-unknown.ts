// unknown é um any mais seguro, variaveis unknown não tem permissões para executar funções ou realizar operações antes de uma checagem de typo.
let x: unknown;

x = 100;
x = 'Luiz';
x = 900.54;
x = true;
x = '10';

if (typeof x === 'number') console.log(x + 800);
