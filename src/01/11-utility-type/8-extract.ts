// Extract<T, V>
// -> 타입들의 교집합에 해당하는 타입으로만 새로운 타입을 생성할 때 사용
// Exclude<T, V> 의 반대되는 개념

{
  type T = 'a' | 'b' | 'c';
  type U = 'a' | 'b';
  // T, U의 교집합에 해당하는 타입으로만 새로운 타입 생성
  // -> 공통적인 'a', 'b'가 남게됨
  type NewType = Extract<T, U>;
}

// Exclude<T, U>와의 차이점
// Exclude<T, U>는 두 타입간의 교집합이 없으면 첫 번째 타입을 반환하지만
// Extract<T, U>는 교집합이 없으면 never 타입을 반환
{
  type T = 'a' | 'b' | 'c';
  type V = 'd';
  // T, V의 공통된 타입이 없기 때문에 never가 반환됨
  type NewType = Extract<T, V>;
}

{
  type TT = number[] | string[] | boolean[];
  type UU = number[] | string[];
  type NewType = Extract<TT, UU>; // type NewType = number[] | string[]
}

{
  type TTT = { name: string } | { age: number } | { gender: 'female' };
  type UUU = { name: string };
  type NewType3 = Extract<TTT, UUU>; // type NewType3 = { name: string; }
}

{
  type Status = 'active' | 'inactive' | 'pending' | 'disabled';
  // Status와 'inactive', 'pending', 'disabled'의 교집합만 남기니까 'inactive', 'pending', 'disabled'가 남음
  type ActiveStatus = Extract<Status, 'inactive' | 'pending' | 'disabled'>;
}

{
  type User = {
    name: string;
    age: number;
  };

  type UserG = {
    name: string;
    age: number;
    gender: string;
  };

  // User, UserG가 아예 똑같은 속성이 아니므로 never 타입이 반환됨 -> 헷갈리지 말 것
  type NewUser = Extract<User, UserG>;
}
