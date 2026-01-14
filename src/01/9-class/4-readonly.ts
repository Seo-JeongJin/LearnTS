class Man {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const man = new Man('jack');
// man.name = 'john'; -> 읽기 전용 속성이므로 값 변경 불가
console.log(man.name);

// 하지만 속성이 참조자료형일 경우에는?
class Example {
  readonly numbers: number[];
  constructor(numbers: number[]) {
    this.numbers = numbers;
  }
}

const ex = new Example([1, 2, 3]);
console.log(ex.numbers);

// readonly는 재할당이 불가능한 것이지 이미 할당된 것에 값을 변경하는 것은 가능함
// 참조 자료형의 특징 때문
ex.numbers[0] = 20;
// 값의 재할당은 불가능
// ex.numbers = [10, 20];
console.log(ex.numbers);

// 추상 클래스에서의 readonly
// 추상 클래스 선언: "이 클래스를 상속받는 자식들은 반드시 name을 가져야 한다"는 설계도
abstract class Animal4 {
  // abstract readonly는 "자식 클래스에서 구현할 때, 최소한 읽기 기능은 있어야 함"을 의미
  abstract readonly name: string;
}
class Cow2 extends Animal4 {
  // 추상화 클래스에서 name 속성에 readonly를 붙여도 서브 클래스에서 readonly가 강제적으로 구현되어야 하는 것은 아님
  // 생성된 인스턴스에서 name의 속성 값이 변경되지 못하게 하려면 직접 해당 클래스에서 readonly를 붙여주어야 함
  name: string;

  constructor(name: string) {
    super();
    // 생성자에서 초기값을 할당
    this.name = name;
  }
}

// 3. 인스턴스 생성
const cow2 = new Cow2('cow2');
console.log(cow2.name); // 출력: 'cow2'

// 4. 값 변경 시도
// Cow2 클래스 정의에서 name에 readonly가 없기 때문에, TypeScript는 이 변경을 정상으로 판단
// 즉, 부모의 '제약'보다 자식의 '허용'이 현재 인스턴스에서 우선시되는 구조
cow2.name = 'c2';
console.log(cow2.name); // 출력: 'c2' (값이 성공적으로 변경됨)
