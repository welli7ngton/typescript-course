let x;
if (typeof x === 'undefined') x = 1;
console.log(x + 20);

export function createPerson(
  firstname: string,
  lastname?: string,
): {
  firstname: string;
  lastname?: string;
} {
  return {
    firstname,
    lastname,
  };
}

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta invalida', typeof squareOfTwoNumber);
} else {
  console.log(squareOfTwoNumber * 10, typeof squareOfTwoNumber);
}

if (squareOfTwoString === null) {
  console.log('Conta invalida', typeof squareOfTwoString);
} else {
  console.log(squareOfTwoString * 10, typeof squareOfTwoString);
}
