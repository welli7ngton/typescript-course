type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

export function area(shape: Shape) {
  if ('size' in shape) {
    return shape.size * shape.size;
  } else {
    return shape.height * shape.width;
  }
}

const square: Shape = { size: 6 };
const square2 = { size: 4 };
const rectangle: Shape = { height: 3, width: 4 };
const rectangle2 = { height: 7, width: 7 };

console.log(area(square)); // 36
console.log(area(rectangle)); // 12
console.log(area(square2)); // 16
console.log(area(rectangle2)); // 49
