// utility type
// -> 기존 타입을 변형하거나 새로운 타입을 쉽게 만들 수 있도록 도와주는 내장된 타입

// Partial<T>
// -> 객체 타입을 모두 선택적 타입으로 변경할 때 사용할 수 있는 유틸리티 타입

{
  interface Car {
    name: string;
    speed(): void;
  }

  // optionalCar이 Car 인터페이스의 속성을 받지만 선택적으로 받을 수 있게됨(속성이 옵셔널 처리됨)
  type optionalCar = Partial<Car>;
}

// 언제 사용하면 좋을까?
// -> 선택적 속성 여부 때문에 새로운 타입을 만들어야 되는 상황에서 유용하게 사용할 수 있음
{
  // 유저 인터페이스는 필수 속성으로 지정되어 있기 때문에
  // 게스트를 처리하기 위한 있어도 되고 없어도 되는
  // 그러한 타입을 지정할 때는 사용하기 어려움
  // -> 게스트라는 별도의 타입을 하나 더 정의를 해서 인터페이스 타입으로 변경을 해주는 것

  interface User {
    name: string;
    age: number;
  }

  // 단지 선택적 속성 차이 때문에 이렇게 별도의 타입을 만든다는 것은 어떻게 보면 비효율적일 수 있음
  // -> 파셜 유틸리티가 해결책일 수 있음
  // interface Guest {
  //   name?: string;
  //   age?: number;
  // }

  const user1: User = {
    name: 'jina',
    age: 24,
  };

  // 파셜 유틸리티 타입을 사용해 기존의 유저 인터페이스 타입을 선택적 속성으로 변경하면 됨
  // -> name, age가 옵셔널 처리되어 들어가도 되고 들어가지 않아도 되는 그러한 타입으로 동작
  const guest1: Partial<User> = {};
}
