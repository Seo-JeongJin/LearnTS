// 인터페이스의 재료로 타입별칭이 사용되는 경우
type Gender = 'male' | 'female';
interface P {
  name: string;
  age: number;
  gender: Gender;
}

const person4: P = {
  name: 'yui',
  age: 24,
  gender: 'female',
};
// -----------------------
type Sound = 'bark' | 'meow' | 'chirp';
interface Animal1 {
  name: string;
  age: number;
}

interface Pet extends Animal1 {
  sound: Sound;
}

interface WildAnimal extends Animal1 {
  sound: Sound;
  dangerLevel: number;
}

function processAnimalSound(sound: Sound) {
  // ...
}

const dog: Pet = {
  name: 'Buddy',
  age: 5,
  sound: 'bark',
};
//-----------------------
type MathOperation = (a: number, b: number) => number;
interface Calculator {
  add: MathOperation;
  subtract: MathOperation;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));

// 타입별칭의 타입의 재료로 인터페이스 타입이 사용되는 경우
interface Puppy {
  breed: string;
  bark(): void;
}

interface Kitten {
  breed: string;
  meow(): void;
}

type pet = Puppy | Kitten; // pet이라는 타입은 puppy or kitten 인터페이스 타입을 가질 수 있게 됨
// ---------------------
interface BasicAddress {
  street: string;
  city: string;
}

type FullAddress = BasicAddress & {
  country: string;
  zipCode: string;
};

const myAddress: FullAddress = {
  street: 'suehirocho',
  city: 'Osaka',
  country: 'Japan',
  zipCode: '123123',
};
