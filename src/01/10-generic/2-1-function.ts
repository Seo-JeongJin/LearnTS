// 제네릭 타입 사용하지 않음
{
  function identity(
    arg: number | string | boolean | number[] | { a: number; b: number }
  ): number | string | boolean | number[] | { a: number; b: number } {
    return arg;
  }

  console.log(identity(1));
  console.log(identity('a'));
  console.log(identity(true));
  console.log(identity([1, 2, 3]));
  console.log(identity({ a: 1, b: 2 }));
}

// 제네릭 사용
// 함수 선언문
{
  function identity<T>(arg: T): T {
    return arg;
  }

  console.log(identity<number>(1));
  console.log(identity<string>('a'));
  console.log(identity<boolean>(true));
  console.log(identity<number[]>([1, 2, 3]));
  console.log(identity<{ a: number; b: number }>({ a: 1, b: 2 }));
}

// 함수 표현식
{
  const identity = function identity<T>(arg: T): T {
    return arg;
  };

  console.log(identity<number>(1));
  console.log(identity<string>('a'));
  console.log(identity<boolean>(true));
  console.log(identity<number[]>([1, 2, 3]));
  console.log(identity<{ a: number; b: number }>({ a: 1, b: 2 }));
}

// 변수에 함수를 할당했을 때
{
  const identity: <T>(arg: T) => T = (arg) => arg;

  console.log(identity<number>(1));
  console.log(identity<string>('a'));
  console.log(identity<boolean>(true));
  console.log(identity<number[]>([1, 2, 3]));
  console.log(identity<{ a: number; b: number }>({ a: 1, b: 2 }));
}

// 화살표 함수
{
  const identity = <T>(arg: T): T => arg;

  console.log(identity<number>(1));
  console.log(identity<string>('a'));
  console.log(identity<boolean>(true));
  console.log(identity<number[]>([1, 2, 3]));
  console.log(identity<{ a: number; b: number }>({ a: 1, b: 2 }));
}
