// 인터페이스에 제네릭을 적용할 수 있다는 건 결국 타입열칭에서도 제네릭을 적용할 수 있다는 것
// 인터페이스에서 타입별칭으로 변경을 하더라도 제네릭 타입을 지정하는 방식에 있어서는 차이점이 없다

{
  type Box<T> = {
    value: T;
  };

  const numberBox: Box<number> = { value: 1 };
  const stringBox: Box<string> = { value: 'a' };
  const booleanBox: Box<boolean> = { value: true };
  const arrayBox: Box<number[]> = { value: [1, 2, 3] };
  const objectBox: Box<{ [key: string]: number }> = { value: { a: 1, b: 2 } };
}

{
  type Pair<T, U> = {
    first: T;
    second: U;
  };

  const pair: Pair<number, string> = { first: 1, second: 'hello' };
  const pair1: Pair<string, boolean> = { first: 'world', second: true };
  // 제네릭의 본질은 타입이 동적으로 결정이 되어져서 치환이 되는 것
  const pair2: Pair<number[], boolean[]> = {
    first: [1, 2, 3],
    second: [true, false],
  };
}

// 한 가지 차이점 -> 타입별칭은 객체 타입이 아니라 일반 타입도 지정할 수 있음
type Point<T> = T;
const numberPoint: Point<number> = 10;
const stringPoint: Point<string> = 'a';
