{
  class MyClass {
    value: string;

    constructor(value: string) {
      this.value = value;
    }

    getValue(): string {
      return this.value;
    }
  }

  const myclass1 = new MyClass('a');
  console.log(myclass1.getValue());

  // const myclass2 = new MyClass(10); // -> 인스턴스가 스트링 타입만 지정돼있기 때문에 타입 에러 발생
  // console.log(myclass2.getValue());
}

{
  class MyClass<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }

    getValue(): T {
      return this.value;
    }
  }
  // 클래스에 적용된 제네릭 타입은 타입 추론이 됨!
  const myclass1 = new MyClass<string>('a');
  console.log(myclass1.getValue());

  const myclass2 = new MyClass(10); // 타입 추론 됨
  console.log(myclass2.getValue());
}

// 클래스 또한 여러 개의 제네릭 타입 지정 가능
{
  class Pair {
    first: number;
    second: string;

    constructor(first: number, second: string) {
      this.first = first;
      this.second = second;
    }

    getFirst(): number {
      return this.first;
    }

    getSecond(): string {
      return this.second;
    }
  }

  const pair1 = new Pair(1, 'apple');
  console.log(pair1.getFirst());
  console.log(pair1.getSecond());

  // const pair2 = new Pair([1, 2], ['apple', 'banana']); // 타입 에러 -> 지정 돼있지 않은 타입
  // console.log(pair2.getFirst());
  // console.log(pair2.getSecond());
}

{
  class Pair<T, U> {
    first: T;
    second: U;

    constructor(first: T, second: U) {
      this.first = first;
      this.second = second;
    }

    getFirst(): T {
      return this.first;
    }

    getSecond(): U {
      return this.second;
    }
  }

  // 클래스는 타입추론됨
  const pair1 = new Pair(1, 'apple');
  console.log(pair1.getFirst());
  console.log(pair1.getSecond());

  const pair2 = new Pair<number[], string[]>([1, 2], ['apple', 'banana']);
  console.log(pair2.getFirst());
  console.log(pair2.getSecond());
}
