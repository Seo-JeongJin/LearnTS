// index signature
// -> 객체의 속성 타입을 동적으로 정할 때 사용

// {
//   [key: keyType]: valueType
// }

let player2: {
  // name: string;
  // gender: string;
  // address: string;
  [key: string]: string | number | (() => string); // 해당 객체의 키는 문자열이며 값은 문자열 또는 숫자 또는 매개 변수가 없고 반환값은 문자열인 함수이다
} = {
  name: 'Miharu',
  gender: 'female',
  address: 'japan',
  age: 23,
  printHello() {
    return 'Hello';
  },
};

interface Person {
  name: string; // name은 string이라고 명시해줌으로써 this.name이 가리키는 값이 문자열이라는 것을 알려줌
  printName: () => string; // printName이 문자열을 반환하는 함수라는 것은 명시해줌
  // 하지만 이렇게 일일이 다 적어줄거면 인덱스 시그니처를 작성하지 않는 것과 똑같음
  // 인덱스 시그니처를 사용한다는건 객체 타입 지정의 자유도를 높여주지만
  // 이로 인해 타입 안정성이 떨어질 수 있어서 이러한 에러를 겪을 수 있기 때문에 주의가 필요함
  [key: string]: string | (() => string);
}

const person1: Person = {
  name: 'Jina',
  printName() {
    return this.name; // 타입스크립트 입장에서는 this.name이 가리키고 있는 반환 값이 문자열이라고 확신할 수 없기 때문에 에러 발생
  },
};

person1.printName(); // printName이 문자열이라면 함수처럼 호출할 수가 없는데 호출하고 있으므로 에러 발생
