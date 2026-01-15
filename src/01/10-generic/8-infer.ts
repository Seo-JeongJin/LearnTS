{
  /**
   * ExtractType<T>: 전달된 타입 T가 특정 배열 형태인지 일일이 확인합니다.
   */
  type ExtractType<T> = T extends number[]
    ? number // 1. T가 숫자 배열이면 number 타입을 반환
    : T extends string[]
    ? string // 2. T가 문자열 배열이면 string 타입을 반환
    : T extends boolean[]
    ? boolean // 3. T가 불리언 배열이면 boolean 타입을 반환
    : T; // 4. 모두 아니면 T 자기 자신을 반환

  // [1, 2, 3]은 number[]이므로 A는 number가 됩니다.
  type A = ExtractType<[1, 2, 3]>;

  // 'a'는 배열이 아니므로 마지막 조건에 걸려 B는 'a' (리터럴 타입)가 됩니다.
  type B = ExtractType<'a'>;

  // ['a', 'b', 'c']는 string[]이므로 C는 string이 됩니다.
  type C = ExtractType<['a', 'b', 'c']>;

  // [true, false]는 boolean[]이므로 D는 boolean이 됩니다.
  type D = ExtractType<[true, false]>;
}

{
  /**
   * ExtractType<T>: infer 키워드를 사용하여 배열 내부의 타입을 동적으로 추출합니다.
   * * T extends (infer U)[] 의 의미:
   * 1. T가 어떤 타입(U)의 배열 형태인지 확인합니다.
   * 2. 만약 배열이 맞다면, 그 요소들의 타입을 U라고 부르겠다고 선언(infer)하는 것입니다.
   * 3. 참(True)일 경우 그 추론된 타입 U를 반환하고, 거짓(False)이면 T를 반환합니다.
   */
  type ExtractType<T> = T extends (infer U)[] ? U : T;

  // T는 [1, 2, 3] (결국 number[]).
  // TypeScript는 U가 number여야 함을 스스로 알아내고(infer), U(number)를 반환합니다.
  type A = ExtractType<[1, 2, 3]>;

  // T는 'a' (배열 아님). extends 조건이 거짓이 되므로 T인 'a'를 그대로 반환합니다.
  type B = ExtractType<'a'>;

  // T는 string[]. U는 string으로 추론되어 string을 반환합니다.
  type C = ExtractType<['a', 'b', 'c']>;

  // T는 boolean[]. U는 boolean으로 추론되어 boolean을 반환합니다.
  type D = ExtractType<[true, false]>;
}
