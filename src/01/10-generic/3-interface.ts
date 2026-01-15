{
  interface Box {
    value: number | string | boolean | number[] | { [key: string]: number };
  }

  const numberBox: Box = { value: 1 };
  const stringBox: Box = { value: 'a' };
  const booleanBox: Box = { value: true };
  const arrayBox: Box = { value: [1, 2, 3] };
  const objectBox: Box = { value: { a: 1, b: 2 } };
}

// 인터페이스의 제네릭 타입은 함수와는 다르게 자동으로 타입추론 되지 않음
{
  interface Box<T> {
    value: T;
  }

  // 반드시 꺽쇠 꺾고 타입 지정 해주어야 함
  const numberBox: Box<number> = { value: 1 };
  const stringBox: Box<string> = { value: 'a' };
  const booleanBox: Box<boolean> = { value: true };
  const arrayBox: Box<number[]> = { value: [1, 2, 3] };
  const objectBox: Box<{ [key: string]: number }> = { value: { a: 1, b: 2 } };
}

{
  interface Pair {
    first: number | string;
    second: string | boolean;
  }

  const pair: Pair = { first: 1, second: 'hello' };
  const pair1: Pair = { first: 'world', second: true };
}

{
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  const pair: Pair<number, string> = { first: 1, second: 'hello' };
  const pair1: Pair<string, boolean> = { first: 'world', second: true };
  // 제네릭의 본질은 타입이 동적으로 결정이 되어져서 치환이 되는 것
  const pair2: Pair<number[], boolean[]> = {
    first: [1, 2, 3],
    second: [true, false],
  };
}
