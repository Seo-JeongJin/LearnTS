interface Add {
  (n1: number, n2: number): number;
}

// const add7: (n1: number, n2: number) => number = function add7(n1, n2) {
//   return n1 + n2;
// };
const add7: Add = function add7(n1, n2) {
  return n1 + n2;
};

interface Greet {
  (name: string): string;
}

const hi: Greet = (name) => `Hi, ${name}`;

// 하지만 인터페이스를 사용한 함수 타입 지정에는 제약사항이 있음
// 변수에 함수를 할당하는 함수 표현식 형태(위와 같은 형태)에서만 인터페이스 타입을 사용할 수 있음

// 함수 선언문 방식으로 함수가 정의되 있으면 기존 방식대로 타입을 직접 명시해주는 방법말고는 없음
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
// -> 인터페이스로는 함수 선언문을 타입을 지정할 수 있는 방법이 없음
