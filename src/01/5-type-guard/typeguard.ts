// type guard
// -> 변수의 타입을 좁혀서 typescript 컴파일러가 변수의 실제 타입을 추론할 수 있도록 도와주는 메커니즘
// union 타입과 같이 변수에 할당할 수 있는 타입의 종류가 늘어나는 경우에 유용하게 사용할 수 있음

function sum(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  else if (typeof a === 'string' && typeof b === 'string') return a + b;
  return String(a) + String(b); // 각 타입이 혼합되었을 때는 명시적으로 문자열로 형변환
}

console.log(sum(10, 20));
console.log(sum('a', 'b'));
console.log(sum('a', 10));

// --- 타입 가드 주의할 점 ---
// function sum(a: number | string, b: number | string): number | string {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;
//   if (typeof a === 'string' && typeof b === 'string') return a + b;
//   if (typeof a === 'number' && typeof b === 'string') return String(a) + b;
//   if (typeof a === 'string' && typeof b === 'number') return a + String(b);
// }

// 모든 타입에 대한 경우의 수가 if 문으로 전부 다 작성이 되어졌을 때, 타입 에러가 발생할 수 있음
// 모든 조건문을 만족하지 못할 경우 반환되는 값이 없기 때문임
// 이에 대한 해결책 4가지
// 1. 함수 반환 타입에 undefined 추가 or 함수 반환 타입에 void 추가 -> 위 코드에서는 undefined가 더 맞는 상황임
// 2. 함수 반환 값 타입 아예 다 지워 버리기 -> 타입스크립트가 알아서 추론함
// 3. 경우의 수에 맞게 내부에서 아예 모두 반환하게 하기 -> return String(a) + String(b); 추가
// 4. 내부에서 error 던지기 throw new Error(); 추가
// -> 근데 에러를 던지는 경우에는 never 라는 타입으로 지정해주는 것이 맞지만
// 반환하는 값이 없을 때만, 그리고 반환하는 값이 없고 무조건 에러 하나만 던질 때만 never를 씀
// 어쨋든 위의 코드는 어떠한 값이 반환될 가능성이 있기 때문에 함수 반환 부분에 never라고 쓰는 것은 생략 가능
