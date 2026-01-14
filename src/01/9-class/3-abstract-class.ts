// abstract class (추상 클래스)
// -> 직접 인스턴스를 생성할 수 없는 클래스
// -> 주로 서브 클래스의 속성이나 메서드를 강제하고 싶을 때 정의
// -> 내부적으로 추상 속성과 추상 메서드를 가짐
// -> 여러 개의 서브 클래스에서 공통적으로 포함해야 하는 속성과 메서드를 일정하게 정의하게 할 수 있음

abstract class Animal2 {
  abstract name: string;
  abstract makeSound(): void;
}

// 추상 클래스에서 정의가 되어져 있는 추상 속성과 추상 메서드는
// 서브 클래스에서 구현하도록 강제적으로 의무화 되어져 있음
// name, makeSound() 를 구현해주어야 에러가 발생하지 않는다.
class Cow extends Animal2 {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  makeSound(): void {
    console.log('Moo');
  }
}
class Bird extends Animal2 {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  makeSound(): void {
    console.log('Tweet');
  }
}

const cow = new Cow('cow');
console.log(cow.name);
cow.makeSound();

const bird = new Bird('bird');
console.log(bird.name);
bird.makeSound();

// --------------------------------------

// 추상화 클래스 내에서 직접 구현하는 것도 가능
// -> abstract 키워드를 제거하고 일반적인 속성과 메서드를 정의할 수도 있음
// -> 속성과 메서드를 서브 클래스에 강제하는 용도가 아니라 그냥 상속을 하게 하는 상속 클래스로서 동작
// -> 직접 인스턴스를 생성할 수 없기 때문
// -> 일반 상속 클래스로서 동작하기 때문에 접근 제어자 또한 그대로 사용할 수 있음

abstract class Animal3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log('Crying');
  }
}

class Cow1 extends Animal3 {}
const cow1 = new Cow1('cow');
console.log(cow1.name);
cow1.makeSound();
