// 함수에서 제네릭을 사용할 때는 꺽쇠 안에 제네릭 타입을 여러 개도 적을 수 있음

{
  function combine(
    a: number | string | boolean | number[] | { a: number; b: number },
    b: string | number | boolean | string[] | { c: number; d: number }
  ): [
    number | string | boolean | number[] | { a: number; b: number },
    string | number | boolean | string[] | { c: number; d: number }
  ] {
    return [a, b];
  }

  console.log(combine(1, 'a'));
  console.log(combine('a', 1));
  console.log(combine(true, false));
  console.log(combine([1, 2, 3], ['a', 'b', 'c']));
  console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));
}

// 제네릭 타입을 하나만 쓸 때는 T, 두 개, 세 개, 네 개 -> U, V, W ... 처럼 쓰는 것이 관용적
// 글로벌하게 대문자로 쓰는 것이 암묵적
{
  function combine<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }

  console.log(combine<number, string>(1, 'a'));
  console.log(combine('a', 1)); // <>로 타입 지정해주지 않아도 타입 추론됨
  console.log(combine(true, false));
  console.log(combine([1, 2, 3], ['a', 'b', 'c']));
  console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));
}

// 함수 표현식
{
  const combine = function combine<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  };

  console.log(combine<number, string>(1, 'a'));
  console.log(combine('a', 1)); // <>로 타입 지정해주지 않아도 타입 추론됨
  console.log(combine(true, false));
  console.log(combine([1, 2, 3], ['a', 'b', 'c']));
  console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));
}

// 화살표 함수
{
  function combine<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }

  console.log(combine<number, string>(1, 'a'));
  console.log(combine('a', 1)); // <>로 타입 지정해주지 않아도 타입 추론됨
  console.log(combine(true, false));
  console.log(combine([1, 2, 3], ['a', 'b', 'c']));
  console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));
}

// 변수에 타입을 지정
{
  const combine: <T, U>(a: T, b: U) => [T, U] = (a, b) => [a, b];

  console.log(combine<number, string>(1, 'a'));
  console.log(combine('a', 1)); // <>로 타입 지정해주지 않아도 타입 추론됨
  console.log(combine(true, false));
  console.log(combine([1, 2, 3], ['a', 'b', 'c']));
  console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));
}

// 제네릭 타입 3개
{
  // 반환값이 인터섹션으로 연결돼있는 이유는 반환 결과가 매개 변수를 하나로 받아서 병합해주는 것이기 때문
  function mergeObjects<T, U, V>(obj1: T, obj2: U, obj3: V): T & U & V {
    return { ...obj1, ...obj2, ...obj3 };
  }

  const result = mergeObjects(
    { name: 'Alice' },
    { age: 24 },
    { isActive: true }
  );
  console.log(result);
}
