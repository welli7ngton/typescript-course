type Square = {
  kind: 'square';
  size: number;
};

type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

export function area(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
  }
}

const s1: Shape = {
  kind: 'square',
  size: 4,
};

const s2: Shape = {
  kind: 'rectangle',
  width: 7,
  height: 3,
};

console.log(area(s1)); // 16
console.log(area(s2)); // 21
