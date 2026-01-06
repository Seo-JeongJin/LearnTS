// 옵셔널 속성
// -> 할당하려는 객체의 속성으로 꼭 해당 속성이 포함되지 않아도 된다는 의미
let user3: { name: string; age: number; getName?: () => string } = {
  name: 'Jina',
  age: 24,
};

// 그러면 애초에 전부 옵셔널 속성으로 지정해주는 것이 더 좋은 거 아닌가?
// -> 옵셔널 속성을 사용하는 것은 타입의 안전성이 떨어지는 방법이므로 신중히 결정해서 사용해야함

// 타입 안전성 이란?
// -> 타입의 일관성과 올바름을 유지하여 타입 관련 오류룰 최소화 하는 것
// 왜 옵셔널 속성을 사용하면 타입 안정성이 떨어지게 되는걸까?

function greet4(user: { name: string; age?: number }) {
  console.log(`Hello. ${user.name}`);
  console.log(`You are ${user.age} years old`);
}

greet4({
  name: 'Jina',
  // age라는 속성이 없는 상태로 매개 변수로 전달되는 것 자체는 타입에러가 아님
  // age 속성을 옵셔널 속성으로 나타내줬기 때문
  // 두 번째 콘솔 출력이 You are undefined year old 라고 뜸
  // age라는 속성 값을 참조할 수 없기 때문에 undefine가 나오게 되는 것임
  // 타입스크립트 컴파일러는 객체 타입을 지정할 때 넘겨주는 매개 변수의 객체 타입에 대한 안정성만 체크
  // 실제로 age가 넘어오지 않음으로써 발생할 수 있는 부분까지는 체크해주지 않음 -> 이러한 부분을 주의하여야 한다
});
