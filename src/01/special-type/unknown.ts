// any와 unknown의 차이점
// -> unknown 타입으로 지정한 값을 사용하려면 type을 좁혀서 사용해야 함(type narrowing)
let a: unknown = 'Hello ';
let b: unknown = 'Haru!';

// a, b 가 어떤 타입인지 알 수 없기 때문에 typeof === 으로 변수의 타입을 좁혀줌
let c =
  // 아래가 타입을 좁혀주는 행위임(type narrowing)
  typeof a === 'string' && typeof b === 'string' ? a + b : '문자열이 아닙니다';

console.log(c);
