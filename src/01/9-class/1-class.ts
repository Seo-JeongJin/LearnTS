// class
// -> 반복된 속성의 객체를 만들어낼 때 사용할 수 있는 문법
// -> 정의하는 하는 객체의 속성은 같은데 값만 조금씩 다르게 여러 개 정의해야 되는 상황에 주로 사용된다

// Ex) -> 매번 새로운 객체를 정의할 때마다 중괄호를 열고 속성을 하나씩 명시해주는 것은 좋은 방법이 아님
// const person1 = {
//   name: 'a',
//   age: 20
// }
// const person2 = {
//   name: 'b',
//   age: 21
// }
// const person3 = {
//   name: 'c',
//   age: 22
// }

// 클래스에서 초기화 하는 속성의 타입 지정하는법
// -> 클래스 키워드 밑에 해당 클래스가 초기화 하려고 하는 속성을 적어줌
class People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  updateName(name: string): void {
    this.name = name;
    console.log(`이름이 ${name}(으)로 변경되었습니다.`);
  }
}

// new 키워드를 사용해서 메모리에 인스턴스를 생성하고 그 객체의 참조값을 p3, p4 라는 변수에 각각 할당
const p3 = new People('jina', 24);
const p4 = new People('haru', 23);

console.log(p3);
console.log(p4);

p3.updateName('yui');

console.log(p3);
console.log(p4);
