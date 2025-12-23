// 타입스크립트는 자바스크립트와 다르게 함수의 매개 변수 개수까지 체크하고 있음
// 따라서 함수 호출할 때 인자로 넣을 값을 함수의 매개 변수 개수와 맞춰주어야 함
// 하지만 옵셔널 프로퍼티(?)를 매개 변수와 콜론 사이에 위치 시키게 되면
// 해당 매개 변수는 말 그대로 optional 이 됨 -> 값을 전달해도 되고, 전달하지 않아도 됨
const printUserName = (lastName: string, firstName?: string): string => {
  return `${lastName} ${firstName || ''}`;
};
// const result = printUserName('Andrew', 'Smith');
const result = printUserName('Andrew');
console.log(result);

const user: {
  name: string;
  age: number;
  gender?: string; // gender 라는 속성이 나중에 추가가 될 수 있도록 선택적으로 지정한 것이 됨
} = {
  name: 'Jina',
  age: 24,
};

user.gender = 'male'; // 옵셔널 속성을 추가해줌으로써 동적 할당을 가능케 하는 것처럼 보이게 함
console.log(user);
