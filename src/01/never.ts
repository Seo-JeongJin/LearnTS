// never -> 절대로 발생하지 않는 값, 절대로 불가능한 경우의 값
// 다른 값을 가지는 것도 불가능해지고 다른 변수에 할당하는 것도 불가능해짐

let nv: never;
let an: any;
let uk: unknown;

// 밑에 다 안됨
// nv = 10;
// nv 'a';
// nv = true;
// nv = [];
// nv = {};
// an = nv;
// uk = nv;

// 그러면 이 내부 타입은 언제 사용되는 것인가??
// -> 1. 가장 일반적으로 사용되는 경우는 함수가 예외를 던질 때
// -> 함수 내부에서 예외를 던지기 때문에 어떠한 값도 정상적으로 반환할 수 있는 상태가 아니기 때문
// 반환되지 않는 함수는 void이지만 예외를 던지는 경우에는 never
function throwError(msg: string): never {
  throw new Error(msg);
}

// -> 2. 함수 내부에 무한 루프에 빠지는 로직이 있을 때(이런 함수를 만드는 일이 잘 없기에 잘 사용안됨)
// -> 함수가 어떠한 값도 반환하는 것이 불가능하기 때문에
function infiniteLoop(): never {
  while (true) {}
}
