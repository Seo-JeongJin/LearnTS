// Required<T>
// -> Partial<T> 와 반대로 모든 객체의 속성을 필수 속성으로 변경해줌
// -> 일부가 선택적 속성인데 모두 필수 속성으로 지정해야 할 필요가 있을 때 유용

{
  interface Car {
    name?: string;
    speed?(): void;
  }

  // Car 인터페이스의 속성을 모두 필수 속성으로 변경하여 RequiredCar 타입에 할당
  type RequiredCar = Required<Car>;
}

{
  interface User {
    name: string;
    age: number;
    address?: string;
  }

  // 일반적인 회원들은 address가 필수가 아니므로 name과 age만 가지게 하면 됨
  const user: User = {
    name: 'jina',
    age: 24,
  };

  // 하지만 사이트에서 주문과 같은 것들을 처리할 때는 그 주문한 사용자의 주소 정보가 필요함
  // -> address 속성을 필수로 변경하게 해야함
  const orderedUser: Required<User> = {
    name: 'haru',
    age: 23,
    address: 'japan',
  };
}
