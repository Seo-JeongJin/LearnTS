// TypeScript는 원래 할당된 값의 종류에 따라서 변수의 타입을 지정해야 하는데
// 타입을 지정하지 않아도 타입 에러가 발생하지 않음.
// -> 타입 추론에 의해서 변수의 타입이 자동으로 추론되었기 때문

// primitive type
let num1 = 10; // -> 자동으로 number 타입으로 추론되어 변수에 적용되고 있음
let str1 = 'A';
let bool1 = true;
let und1 = undefined; // -> 자동으로 any 타입으로 추론되어 변수에 적용되고 있음
let nul1 = null;
let sym1 = Symbol();

// reference type
let arr = [10, 20]; // -> number[]
let obj = { name: 'Jina' }; // -> { name: string }
let fun = function () {}; // void
