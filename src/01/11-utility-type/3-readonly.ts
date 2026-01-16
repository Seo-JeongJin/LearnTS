// Readonly<T>
// -> 객체의 속성을 모두 읽기 전용 속성으로 변경

{
  interface Car {
    name: string;
    speed(): void;
  }

  // 객체의 속성이 읽기 전용 속성으로 바뀜
  type ReadonlyCar = Readonly<Car>;
}

{
  interface User {
    name: string;
    age: number;
    address?: string;
  }

  // 특정 페이지에서만 특정 유저 인터페이스 데이터를 변경하지 못하게 하고 싶다라고 했을 때
  const user: Readonly<User> = {
    name: 'jina',
    age: 24,
  };

  // user.name = 'haru'; -> name 속성이 읽기 전용 속성으로 변경되었으므로 값 변경 불가
}
