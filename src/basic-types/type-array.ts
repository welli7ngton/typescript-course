// Array<T> = T[]

export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpper(...args: string[]): string[] {
  return args.map((v) => v.toUpperCase());
}

const r1 = multiplicaArgs(1, 2, 3);
const r2 = concatenaString('1', '2', '3');
const r3 = toUpper('1', '2', '3');

console.log(typeof r1);
console.log(typeof r2);
console.log(typeof r3);
console.log(r3);
