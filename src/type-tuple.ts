// tuple
const d1: [number, string] = [1, 'Luiz'];
const d2: [number, string, string] = [1, 'Luiz', 'otavio'];
const d3: [number, string, string?] = [1, 'Luiz'];
const d4: [number, string, ...string[]] = [1, 'Luiz', 'aaaa', 'bbbb'];

d1[0] = 100;
d1[1] = 'jose';

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);

// readonly array
const arr1: readonly string[] = ['Wellington', 'Almeida'];
const arr2: ReadonlyArray<string> = ['Pedro', 'Henrique'.toUpperCase()];
console.log(arr1);
console.log(arr2);
