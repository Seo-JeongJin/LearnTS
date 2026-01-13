// 타입 별칭도 인터페이스처럼 객체 타입을 지정하는게 가능함

// readonly, optional 다 사용 가능
type Person3 = {
  readonly name: string;
  age: number;
  gender?: 'male' | 'female';
};

let person3: Person3 = {
  name: 'Haru',
  age: 23,
  gender: 'female',
};

// 함수 시그니처
interface Add {
  (n1: number, n2: number): number;
}
type Sum = (n1: number, n2: number) => number;
const ad: Sum = (n1, n2) => n1 + n2;

// 인덱스 시그니처
type User = {
  [key: string]: string;
};

let u: User = {
  name: 'jina',
  gender: 'male',
  address: 'KR',
};
