// function overloading
// -> 동일한 함수 이름을 사용하되 서로 다른 매개 변수 및 반환 값을 가지는 함수를 여러 개 정의할 수 있는 기능
// 필수가 아니라 선택적인 기능임
// 하지만 함수 오버로드를 사용하면 함수 시그니처 타입을 명확하게 하고 타입이 명확해지기 때문에
// 그에 따른 안정성도 증가함

// overload signature -> case를 나눔
function greet3(name: string): string; // 매개 변수 1개인 경우
function greet3(name: string, age: number): string; // 매개 변수 2개인 경우

// implementation signature -> 구현부
function greet3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}.`;
  }
}

console.log(greet3('Jina')); // overload 했을 때와 안했을 때의 타입 추론이 다르게 보임
console.log(greet3('Jina', 24)); // 안했을 때는 구현부의 타입이 전부 보이는데 했을 때는 매개 변수의 타입을 정확히 추론함
greet3('Jina', 25);
greet3('');

// ----------------------
function add5(n1: number, n2: number): number;
function add5(n1: string, n2: string): string;
function add5(n1: number | string, n2: number | string): number | string {
  if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
  else if (typeof n1 === 'string' && typeof n2 === 'string') return n1 + n2;
  throw new Error('Invalid arguments');
}

const res1 = add5('a', 'b'); // 매개 변수의 타입 둘 다 string 으로 추론함
const res2 = add5(10, 20); // 매개 변수의 타입 둘 다 number 으로 추론함

console.log(res1);
console.log(res2);

// ----------------------
function formatValue(value: number): number;
function formatValue(value: string): string;
function formatValue(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.trim().toUpperCase();
  } else {
    return value;
  }
}

const result1 = formatValue('hello');
const result2 = formatValue(10);

console.log(result1);
console.log(result2);

// ----------------------
function processData2(value: string): string;
function processData2(value: number): number;
function processData2(value: boolean): string;
function processData2(value: string | number | boolean): string | number {
  if (typeof value === 'string') {
    return `String: ${value}`;
  } else if (typeof value === 'number') {
    return value * 2;
  } else {
    return value ? 'True' : 'False';
  }
}

const r1 = processData2('a');
const r2 = processData2(10);
const r3 = processData2(true);

console.log(r1);
console.log(r2);
console.log(r3);
