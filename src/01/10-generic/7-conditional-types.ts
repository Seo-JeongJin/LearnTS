{
  // T가 'A'라는 리터럴 타입을 가지고 있다면 IsString<T> 타입은 true를, 아니면 false를 가지게된다
  type IsString<T> = T extends 'A' ? true : false;
  // IsString<'A'>로 IsString 타입이 'A' 리터럴 타입을 만족하고 있으므로 isString1은 true만 가질 수 있다
  const isString1: IsString<'A'> = true;
  const isString2: IsString<'AA'> = false;
}

{
  interface Nameable {
    name: string;
  }

  interface Ageable {
    age: number;
  }

  // T가 name 속성을 가지고 있다면 conditionInterface 타입이 Nameable 타입이 되고 그렇지 않으면 Ageable 타입이 됨
  type conditionInterface<T> = T extends { name: string } ? Nameable : Ageable;

  const person1: conditionInterface<{ name: string }> = { name: 'jina' };
  const person2: conditionInterface<{ age: number }> = { age: 24 };
}
