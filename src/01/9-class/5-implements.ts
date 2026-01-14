// class는 implements 키워드를 사용하여
// 특정 인터페이스나 타입별칭으로 정의한 타입을 구현하도록 강제할 수 있음
// -> implements 키워드는 정의되어져 있는 타입을 구현하도록 강제할 때 사용할 수 있음

interface Animal5 {
  name: string;
  makeSound(): void;
}

// Dog1 클래스는 Animal5 인터페이스의 타입을 구현해야 할 의무가 생김
class Dog1 implements Animal5 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log('Woof');
  }
}

// --------------------------------------
// 서브 클래스의 타입을 강제한다는 점에서 추상화 클래스와 implements가 매우 유사하다
// 하지만 몇 가지 차이점은 존재함
// 여러 타입을 강제로 구현해야 된다면 implement를 사용하는 것이 더 유리
// 일부 기본 동작을 제공하면서 추가적인 구현을 서브 클래스에 요구하고 싶다면 추상화 클래스가 유리

// implements로 구현받은 클래스의 생성자 안에서는 super() 호출 못함
// -> interface, type 키워드로 생성된 것은 생성자가 없기 때문에
{
  type Animal = {
    name: string;
    makeSound(): void; // 단순히 정의가 되어져 있는 타입을 구현하도록 강제하는 것일 뿐임 -> 구현 못함(당연히)
  };
  type Runable = {
    run(): void;
  };
  class Dog implements Animal, Runable {
    // implements는 여러 개의 타입을 동시에 구현할 수 있음(다중 상속)
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    makeSound(): void {
      console.log('Wolf');
    }
    run(): void {
      console.log('running');
    }
  }
}

{
  abstract class Animal {
    abstract name: string;
    makeSound(): void {
      console.log('Crying'); // 추상 클래스 안에서는 메서드를 구현해서 제공 가능
    }
  }
  class Dog extends Animal {
    // 추상 클래스는 단일 상속만 허용
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
  }
  const dog = new Dog('dog');
  dog.makeSound();
}

// --------------------------------------
// 인터페이스 끼리는 extends 사용가능
// 클래스가 인터페이스를 상속받을 때는 implements
// interface extends interface, interface, ... -> 가능 -> 구현해야하는 타입의 확장
// class 식별자 implements interface, interface, ... -> 가능 -> 클래스가 인터페이스의 타입을 강제로 구현해야 함
// class 식별자 extends interface -> 불가능

{
  interface Animal {
    name?: string; // 옵서녈 사용 가능
    makeSound(): void;
  }
  interface Runable extends Animal {
    run(): void;
  }
  class Dog implements Runable {
    // 구현된 모든 타입을 클래스에서 구현해주어야 함
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    makeSound(): void {
      console.log('Wolf');
    }
    run(): void {
      console.log('running');
    }
  }
}

// 타입별칭은 extends 키워드를 사용할 수 없음 (implements는 가능)
{
  type Animal = {
    name?: string; // 옵셔널 사용 가능
    makeSound(): void;
  };
  type Runable = {
    run(): void;
  } & Animal;
  class Dog implements Runable {
    // 구현된 모든 타입을 클래스에서 구현해주어야 함
    // name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    makeSound(): void {
      console.log('Wolf');
    }
    run(): void {
      console.log('running');
    }
  }
}

// 인덱스 시그니처도 구현 가능
{
  interface Animal {
    readonly [key: string]: string; // readonly는 서브 클래스의 구현 대상에서 제외됨
  }
  class Dog implements Animal {
    [key: string]: string; // readonly를 적용하고 싶으면 직접 키워드를 적어줘야함
    constructor(word: string, definition: string) {
      this[word] = definition;
    }
  }
  const dog = new Dog('name', 'Kkamung');
  dog.name = 'dare'; // 클래스 안에서 속성에 readonly를 직접 붙여주지 않는 한 값 변경 가능 -> 추상화 클래스 안에 있는 속성에 readonly가 붙어져도 마찬가지임(복습차원에서 적어놓은 것)
  console.log(dog.name);
}
