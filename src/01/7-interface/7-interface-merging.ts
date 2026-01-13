// interface merging
// -> 같음 이름의 인터페이스가 자동으로 합쳐짐
// -> 인터페이스의 이름이 똑같기만 하면 몇 개든지 상관없이 전부 병합됨

interface User4 {
  name: string;
}

interface User4 {
  age: number;
}

let user4: User4 = {
  // name, age 둘 중 하나만 선언돼있으면 타입에러 발생
  name: 'Jina',
  age: 24,
  gender: 'male', // gender 프로퍼티가 나중에 선언되었음에도 빠지면 타입에러 발생
};

// 인터페이스 병합은 위치와 상관없이 병합이 이루어짐
// 컴파일러가 인터페이스의 병합을 먼저 수행한 다음에 타입 검사를 하기 때문
interface User4 {
  gender: string;
}
