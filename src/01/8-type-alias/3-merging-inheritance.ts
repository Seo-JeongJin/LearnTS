// 타입별칭은 인터페이스처럼 타입병합 및 상속이 안됨

// type User = {
//   name: string;
// }
// type User = {
//   age: number;
// }

// type Animal = {
//   name: string;
//   age: number;
// };
// type Dog extends Animal = {
//   gender: string;
// }

// 억지로다도 병합과 상속처럼 보이게 하고 싶으면 intersectio(&)을 이용해 흉내는 낼 수 있음
// 문법적으로 완전히 동일한 메커니즘은 아니라는 사실은 인지
type Name = {
  name: string;
};
type Age = {
  age: number;
};
type User1 = Name & Age;

const u1: User1 = {
  name: 'jina',
  age: 24,
};
// ------------------------
type Animal = {
  name: string;
  age: number;
};

type Dog = Animal & {
  gender: string;
};

const pet: Dog = {
  name: 'kkyu',
  age: 10,
  gender: 'female',
};
