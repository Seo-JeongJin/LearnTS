// inheritance(상속)
// -> 부모가 가지고 있는 속성을 자식이 물려받는 것 (인터페이스만의 고유 문법)

interface Person1 {
  name: string;
  age: number;
}

interface Developer extends Person1 {
  skill: string;
}

const jina: Person1 = {
  name: 'jina',
  age: 24,
};

const developer: Developer = {
  name: 'jina',
  age: 24,
  skill: 'Full Stack',
};

// 주의할 점
// -> 인터페이스의 상속을 단순히 중복된 속성을 제거하려는 목적으로 사용하는 것은 피해야 함
// -> 코드의 가독성 및 유지보수가 어려워질 수 있기 때문
// -> 상속은 되도록이면 서로 연관관계가 명확한 것들끼리 하는 것이 안정적임

interface Phone {
  name: string;
  color: string;
}

interface Tv extends Phone {
  // 코드 상으로는 문제 없지만 의미가 모호해짐
  channel: string;
}

const galaxy: Phone = {
  name: 'galaxy ultra 24',
  color: 'white',
};

const lg: Tv = {
  name: 'LG OLED TV',
  color: 'black',
  channel: '24 channel',
};
