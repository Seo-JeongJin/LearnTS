// multiple inheritance (다중 상속)
// -> 부모와 자식 관계가 아니더라도 적절한 조합을 통해서 새로운 인터페이스를 정의할 때 사용
// -> 보통 서로 관련이 없는 인터페이스를 하나로 조합해야 하는 경우에 많이 사용함

// 함수 선언문
// interface Identifier extends Other1, Other2, ...OtherN {}

// user5, log 인터페이스는 부모와 자식 관계라고 보기도 어렵고
// 중복되는 속성도 없어서 서로가 서로를 상속하거나 상속 받는 관계를 맺어주기가 어려움
interface User5 {
  name: string;
  age: number;
}

interface Log {
  log(message: string): void;
}

// 서로 관련없는 두 개의 인터페이스를 하나로 조합하는 용도로 사용 가능
// 다중 상속도 결국 상속이기에 다중 상속된 인터페이스를 사용하고 있는 변수는
// 상속을 해주는 부모 인터페이스의 속성을 모두 포함해야함 -> 그래야 타입 에러가 발생하지 않음
interface UserWithLogging extends User5, Log {}
const haru: UserWithLogging = {
  name: 'haru',
  age: 23,
  log(message: string) {
    // 함수 같은 경우는 매개 변수에 대한 타입을 지정해주지 않아도 타입 추론이 됨
    // 하지만 명확하게 타입을 적어주는 것이 권장된다
    console.log(message);
  },
};
