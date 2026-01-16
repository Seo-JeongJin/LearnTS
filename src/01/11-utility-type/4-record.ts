// Record<T>
// -> 객체의 키와 값의 타입을 받아서 객체의 타입을 일괄적으로 정해줄 때

{
  type User = Record<string, string>;
  // 객체의 키와 밸류가 둘 다 문자열이면 됨
  // 인덱스 시그니처와 같은 형태가 된 것임
  const user: User = { name: 'jina', gender: 'male' };
}

{
  // 키에 포괄적인 타입이 아니라 리터럴 타입을 전달해주게 되면
  // 그 리터럴 타입을 객체 키의 식별자로 사용함
  // -> name, gender라는 속성을 포함한 객체 타입으로 정의가 됨
  // 값에 해당하는 부분도 유니온 타입을 적을 수 있음
  type User = Record<'name' | 'gender', string | number>;
  const user: User = {
    name: 'haru',
    gender: 'female',
    // address: 'japan', -> name, gender가 아닌 속성이 추가되려고 하면 에러 발생
  };
}
