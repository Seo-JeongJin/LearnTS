// Interface
// -> 객체의 타입을 정의할 때 사용할 수 있는 문법

// interface 식별자 {
//   속성명1: 타입1,
//   속성명2: 타입2,
//   ...
//   속성명N: 타입N
// }

// 인터페이스는 하나의 타입으로 인식됨
// 인터페이스를 사용해서 기존의 타입을 대체해줄 수 있음
interface User {
  uname: string;
  age: number;
  gender: 'male' | 'female';
}

const japanese3: User = {
  uname: 'miharu',
  age: 23,
  gender: 'female',
};

const japanese4: User = {
  uname: 'ayaka',
  age: 30,
  gender: 'female',
};

const korean2: User = {
  uname: 'jina',
  age: 24,
  gender: 'male',
};

// 인터페이스에 대한 오해
// 꼭 반복되는 객체 타입을 정의할 때 사용해야 된다라고 생각할 수 있지만
// 반보고디지 않더라도 객체 타입을 정의할 때 인터페이스를 사용해도 됨
// 오히려 변수에 타입을 직접 명시하는 것 보다는 인터페이스를 통한 변수 타입 지정이 더 권장됨

// 인터페이스는 별도의 파일에다가 작성하는 것도 가능함
// export 키워드로 인터페이스를 내보내고 import로 받기

import { User1 } from '../../types/user';

const american: User1 = {
  name: 'Mike',
  age: 15,
  gender: 'male',
};
