// structural typing(구조적 타이핑)
// -> 객체의 형태에 기반하여 타입을 검사하는 시스템
// -> 타입스크립트는 특정 객체가 어떤 타입에 부합하는지 여부를 객체의 구조를 기준으로 판단함

interface User6 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age: number;
}

let user6: User6 = {
  name: 'jina',
  age: 24,
};

let person2: Person2 = {
  name: 'haru',
  age: 23,
};

// 서로 다른 인터페이스를 타입으로 사용하고 있음에도 불구하고 서로 할당하는 것이 가능함
// user6, person2 인터페이스는 식별자는 다르지만 객체의 형태는 name, age 그리고 값의 타입 또한 같기 때문에
// 객체의 형태가 완전히 똑같다고 볼 수 있음
// 이렇게 객체의 키와 값의 타입이 모두 일치하면 타입스크립트가 객체 타입을 검사할 때
// 객체 형태에 기반하여 검사하는 '구조적 타이핑'에 의거하여 타입이 일치하다고 판단해버림
// 하나라도 값의 타입이 다르거나 옵셔널 속성이 붙어있다면 구조적 타이핑의 대상이 되지 않음
// but readonly 키워드는 상관없음 -> 객체의 형태를 망가뜨리지는 않기 때문
user6 = person2;
person2 = user6;

// let x: number = 10;
// let s: string = 'a';
// x = s; // 타입 불일치, 에러
// s = x; // 타입 불일치, 에러

interface User7 {
  name: string;
  age: number;
}

function greetUser(person: User7) {
  console.log(`Hello. ${person.name}`);
}
// user7 변수는 User7의 인터페이스 타입이 아니기 때문에 매개 변수로 전달이 안될 것 같지만
// 구조적 타이핑으로 인해 타입스크립트가 객체의 타입을 검사할 때 형태에 기반하여 검사하고
// 객체의 타입의 키와 값, 인터페이스의 키와 값을 확인하여 일치하므로 같은 타입이라고 인식함
const user7 = { name: 'haru', age: 23 };
greetUser(user7);
