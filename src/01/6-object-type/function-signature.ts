// 객체 타입으로 함수 시그니처 지정하기
// 객체 타입을 정의할 때 매개 변수 타입을 속성명 쪽에 작성하고
// 반환값의 타입을 속성 값 쪽에 작성하면 됨

const add6: { (n1: number, n2: number): number } = function add6(n1, n2) {
  return n1 + n2;
};
console.log(add6(10, 20));

// 이렇게 객체 타입으로 함수 시그니처를 작성하는 것은 일반적이지는 않으므로
// 객체 타입으로도 함수 시그니처를 작성할 수 있다는 사실 정도만 가볍게 이해하면 됨
// const aisatsu: (name: string) => string = (name) => `Hello ${name}`; // -> 함수 시그니처
const aisatsu: { (name: string): string } = (name) => `Hello ${name}`;
console.log(aisatsu('Miharu'));
