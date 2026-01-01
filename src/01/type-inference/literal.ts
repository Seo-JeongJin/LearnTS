// Literal type -> 특정 값을 타입으로 지정(심벌 제외 모두 가능) -> 리터럴 타입이 값과 정확하게 일치해야함
// let male: 'male' = 'male';
let gender: 'male' | 'female' = 'male'; // 변수에 다른 문자열 말고 'male', 'female'만 할당하게 하고 싶을 때
gender = 'female';
// gender = 'A'; -> 타입 에러 발생

let stu: { name: 'haru' };
stu = {
  // name: 'jina', -> name 속성의 값이 정확히 'haru' 이어야 함
  name: 'haru',
};

// ---------------------------
// 1. 기본 자료형에서의 const
// const male = 'male'; -> 상수이므로 typescript 컴파일러가 이는 고정된 값이라는 것을 앎
// -> 변수 male은 자동으로 'male'이라는 리터럴 타입으로 지정됨

// 2. 참조 자료형에서는 let, const 키워드에 따른 타입 추론적인 차이가 없음
// const인데도 왜 literal이 안되냐?
// -> const는 재할당이 불가능한 키워드이지 할당된 것에서는 값이 바뀔 수 있기 때문임
// -> const로 선언된 배열에서도 push로 값을 추가할 수 있고
// -> cons로 선언된 객체에서도 user1.name = 'Haru'; 와 같은 식으로 값 변경이 일어날 수 있기 때문
const arr1 = [10, 20]; // -> const 키워드를 사용했지만 타입 추론은 literal 이 아닌 number[]
arr1.push(30);

const user1 = {
  name: 'Jina',
};
user1.name = 'Haru';

console.log(arr1); // [ 10, 20, 30 ]
console.log(user1); // { name: 'Haru' }
