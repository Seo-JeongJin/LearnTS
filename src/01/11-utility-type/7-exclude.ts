// Exclude<T, U>
// -> 주어진 타입 T에서 주어진 타입 U를 제외한 새로운 타입을 생성할 때 사용

{
  type T = 'a' | 'b' | 'c';
  type U = 'a' | 'b';
  // T, U의 교집합에 해당하는 공통된 타입을 제외하고 나머지 타입만 추출
  // -> 공통적인 'a', 'b'를 제외한 'c'만 남게됨
  type NewType = Exclude<T, U>;
}

{
  // 만약 주어진 타입들의 공통된 타입을 찾을 수가 없다면 무조건 첫 번째 타입을 그대로 반환

  type T = 'a' | 'b' | 'c';
  type U = 'a' | 'b';
  type V = 'd';
  // T, V의 공통된 타입이 없기 때문에 T만 반환됨
  // V, T의 순서가 바뀌면 V만 반환되는 것
  type NewType = Exclude<T, V>;
}

{
  type Status = 'active' | 'inactive' | 'pending' | 'disabled';
  // Status와 'inactive', 'pending', 'disabled'의 교집합을 제외한 나머지 타입을 남기니까 'active'만 남음
  type ActiveStatus = Exclude<Status, 'inactive' | 'pending' | 'disabled'>;
}

// 헷갈릴 수 있는 점!!
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

  /**
   * NewUser: Exclude를 사용한 타입 계산 결과입니다.
   * * [동작 원리 상세 설명]
   * Exclude<T, U>의 내부 로직은 `T extends U ? never : T` 입니다.
   * 즉, "User 타입을 UserG 타입에 대입(할당)할 수 있는가?"를 따져봅니다.
   * * - User는 {name, age}만 있고 {gender}가 없습니다.
   * - 반면 UserG는 {name, age, gender}가 모두 있어야 하는 타입입니다.
   * - 따라서 "User는 UserG에 포함(할당)될 수 없다"고 판단합니다. (성질이 부족하니까요!)
   * - 결과적으로 제외되지 않고 원래의 'User' 타입이 그대로 남게 됩니다.
   */
  // 즉, User가 UserG를 가질 수 있냐? 라고 했을 때 가질 수 없기 때문에(오히려 UserG가 속성이 더 많기에)
  // 타입스크립트는 이 두 타입이 서로 교집합이 없다고 생각함 -> User가 반환(첫 번째)

  // 그냥 애초에 User, UserG가 완전히 똑같은 값이 아니기 때문에 안되는거임.. 당연한거임
  type NewUser = Exclude<User, UserG>;
  // 최종 결과: NewUser = User
}
