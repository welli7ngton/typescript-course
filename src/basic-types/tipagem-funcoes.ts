// criando o tipo da funcao
type MapStringCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  // definindo a tipagem da funcao
  callbackfn: MapStringCallback, // tipagem da funcao
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

//                                                funcao de callback
console.log(mapStrings(['a', 'b', 'c'], (item) => item.toUpperCase()));
