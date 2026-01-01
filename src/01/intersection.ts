// intersection type (& -> ampersand)
// 변수 i는 name의 속성값이 문자열이고
// age 속성값이 숫자 0인 객체가 함께 만족이 되어야지만 타입 에러가 발생하지 않는 그러한 타입
// gender는 optional, 나머지 프로퍼티는 누락이 되면 타입 에러 발생
let i: { name: string } & { age: number } & { gender?: string };
i = {
  name: 'Jina',
  age: 24,
};
