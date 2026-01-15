// Generic
// -> 타입을 동적으로 정의할 수 있게 해주는 타입스크립트의 강력한 기능

// 하나의 함수를 여러가지 배열을 매개변수로 전달해서 공통으로 사용하려면
// 자바스크립트에서는 문제없지만 타입스크립트에서는 타입을 명시적으로 지정해야하기에
// 코드가 길어져 가독성이 떨어질 수 있음
{
  function getFirstElements(
    arr: number[] | string[] | boolean[]
  ): number | string | boolean {
    return arr[0];
  }

  getFirstElements([1, 2, 3]);
  getFirstElements(['a', 'b', 'c']);
  getFirstElements([true, false]);
}

// T라는 제네릭 타입은 해당 함수 안에서 활용할 수 있는 타입
// 매개 변수 타입과 반환 값에 대한 타입도 임의의 문자열(T)로 정해준 것으로 지정해줌
{
  function getFirstElements<T>(arr: T[]): T {
    return arr[0];
  }

  // 제네릭 타입이 지정돼있는 함수는 호출할 때 꺽쇠에다가 동적 타입을 결정할 수 있는 명시적 타입을 적어줘야 함
  // 제네릭 타입도 타입 추론이 되기 때문에 생략 가능(개인의 선호에 따라 결정)
  getFirstElements<number>([1, 2, 3]); // number가 임의의 문자열인 T와 동일하게 됨(들어간다고 봐도 됨)
  getFirstElements<string>(['a', 'b', 'c']);
  getFirstElements<boolean>([true, false]);
}
