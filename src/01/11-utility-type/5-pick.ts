// Pick<T, K>
// -> 특정 객체 타입에서 원하는 타입만 뽑아오고 싶을 때
// -> T에는 뽑아오고 싶은 타입을 적어주고 , K에는 뽑아오고자 하는 객체의 속성명을 적어주면 됨

{
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  // 유저 인터페이스의 타입에서 name이라는 속성을 뽑아와 새로운 타입으로 정의
  // 추가적으로 속성을 뽑아오고 싶다면 유니온 타입 사용하면 됨
  type NewUser = Pick<User, 'name' | 'age'>;
  const newUser: NewUser = {
    name: 'jina',
    age: 24,
  };
}
