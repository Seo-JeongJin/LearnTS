// --- 함수 선언문 ---
// 리턴 값이 없을 때는 : void
function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}

// 리턴 값 존재할 때는 : data type
function sum(n1: number, n2: number): number {
  return n1 + n2;
}

add(1, 2); // 3
console.log(sum(2, 3)); // 5
// ---------------------

// --- 함수 표현식 ---
// 변수에다 타입을 지정하거나 함수쪽에다 타입을 지정하거나 둘 중에 하나
const mul: (n1: number, n2: number) => void = (n1, n2) => {
  console.log(n1 * n2);
};
// const mul: (n1: number, n2: number) => void = function (
//   n1: number,
//   n2: number
// ): void {
//   console.log(n1 * n2);
// };

const div: (n1: number, n2: number) => number = (n1, n2) => {
  return n1 / n2;
};
// const div: (n1: number, n2: number) => number = function (
//   n1: number,
//   n2: number
// ): number {
//   return n1 / n2;
// };

const printHello: () => void = () => {
  console.log('Hello');
};

mul(1, 2); // 2
console.log(div(1, 2)); // 0.5
printHello();
