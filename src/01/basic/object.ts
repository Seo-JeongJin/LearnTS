// 1. 빈 객체
// let obj1: {} = {}; // 이는 undefined, null 을 제외한 모든 값을 허용함
// obj1 = undefined; // 할당 불가
// obj1 = null; // 할당 불가
// obj1 = 10; // 할당 가능
// obj1 = 'A'; // 할당 가능
// obj1 = function () {}; // 할당 가능
// obj1 = []; // 할당 가능
let obj1: Record<string, never> = {}; // -> 진정한 의미의 빈 객체 -> 빈 객체를 할당할 때 이외에는 모든 값 할당 안됨
obj1 = {};

// 2. 객체에 프로퍼티 추가
let obj2: { name: string } = { name: 'Jack' };

// 3. 객체에 프로퍼티 추가
// 객체의 타입은 속성과 속성을 구분할 때 세미 콜론 사용
let obj3: { name: string; age: number } = { name: 'Jack', age: 24 };

// 4. 객체에 논리형 프로퍼티 추가
let obj4: { name: string; age: number; adult: boolean } = {
  name: 'Jack',
  age: 24,
  adult: false,
};

// 5. 객체에 undefined 프로퍼티 추가
let obj5: { name: string; age: number; adult: boolean; job: undefined } = {
  name: 'Jack',
  age: 24,
  adult: false,
  job: undefined,
};

// 6. 객체에 null 프로퍼티 추가
let obj6: { name: string; age: number; adult: boolean; job: null } = {
  name: 'Jack',
  age: 24,
  adult: false,
  job: null,
};

// 객체에 객체 프로퍼티 추가
let obj7: {
  name: string;
  age: number;
  adult: boolean;
  job: { title: string; view: number };
} = {
  name: 'Jack',
  age: 24,
  adult: false,
  job: { title: 'programmer', view: 1000 },
};

// 객체에 date 프로퍼티 추가
let obj8: {
  name: string;
  age: number;
  adult: boolean;
  job: { title: string; view: number };
  today: Date;
} = {
  name: 'Jack',
  age: 24,
  adult: false,
  job: { title: 'programmer', view: 1000 },
  today: new Date(),
};

// object-deepning

let obj9: {
  job: string;
  getJob: () => string;
} = {
  job: 'developer',
  getJob: function () {
    return this.job;
  },
};

let obj10: {
  skills: string[];
  job: string;
  getJob: () => string;
} = {
  skills: ['js', 'ts'],
  job: 'developer',
  getJob: function () {
    return this.job;
  },
};
