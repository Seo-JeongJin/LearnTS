// 기본 자료형
let uname: any = 'Jina';
let age: any = 24;
let isDone: any = true;

// 배열
const numbers: any = [10, 20, 30, 40];
const names: any = ['Jina', 'Haru'];

// 튜플
const person: any = ['Jina', 24];

// 객체
const player: any = {
  name: 'Jina',
  age: 24,
  isAdmin: true,
};

// 함수
function greet(person: any): any {
  return `Hello, ${person}`;
}

function add1(x: any, y: any): any {
  return x + y;
}

// 함수 타입
// const multiply = (a: any, b: any): any => a * b;
let multiply: (a: any, b: any) => any;
multiply = (a, b) => a * b;

console.log(isDone);
console.log(age);
console.log(uname);
console.log(numbers);
console.log(names);
console.log(person);
console.log(player);
console.log(greet(uname));
console.log(add1(2, 3));
console.log(multiply(2, 3));
