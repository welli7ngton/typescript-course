export function funcao(this: Date, name: string, age: number) {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), 'Wellington', 21);
funcao.apply(new Date(), ['Wellington', 21]);
