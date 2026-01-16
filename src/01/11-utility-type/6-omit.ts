// Omit<T, K>
// -> 주어진 타입 T에서 특정 속성 K를 제외한 새로운 타입을 생성할 때 사용

{
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  // 기존에 존재하는 User 타입에서 gender 속성을 제외한 새로운 타입 생성 -> name, age 속성을 받게됨
  // 속성을 더 제외하고 싶다면 유니온을 사용하면 됨
  type NewUser = Omit<User, 'gender' | 'age'>;
  const newUSer: NewUser = {
    name: 'haru',
    // age: 23,
    // gender: 'japan' -> gender 속성은 포함되면 안됨
  };
}
