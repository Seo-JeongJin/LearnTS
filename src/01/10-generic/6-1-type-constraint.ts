// 제네릭에서도 extends 사용 가능
// -> 타입을 제약하는 용도로 활용하게 됨

// {
//   function identity<T>(arg: T): string {
//     return arg.name; // 에러 이유 -> 네임 속성의 값이 없는(첫 번째 숫자 배열 출력문) 것이 충분히 전달될 수 있기 때문
//   }

//   console.log(identity([1, 2, 3]));
//   console.log(identity({ name: 'jina' }));
// }

{
  // 대부분의 타입을 허용하긴 하지만 매개 변수로 전달되는 값에 name 속성인 값이 반드시 포함되어져 있게끔 제약이 걸림
  function identity<T extends { name: string }>(arg: T): string {
    // 쉽게 풀어쓰면 T라는 타입이 반드시 name이라는 속성(문자열)을 가져야 하는 것
    // 키가 name에 값이 문자열인 프로퍼티가 존재한다면 다른 속성 또한 존재해도 됨

    // 개인적 의문 -> 함수의 반환 값이 T이면 안되나?
    // 안됨, 그건 들어온 값을 통째로 반환한다는 뜻이기 때문
    // 함수의 반환 값이 T가 되면 return arg가 되어야 함
    // 지금은 반환 값이 arg 객체 안의 name 속성이므로 반환 값이 string이 되어야 하는 것이 맞음
    // 함수를 호출할 때 어떤 인자가 들어올 지 모르기 때문에(name: string 인 값 하나만 들어오는 것이 아니기에) T는 안됨
    // T는 함수 호출됐을 때 들어온 인자 전체의 타입으로 치환되기 때문임
    return arg.name;
  }

  // ❌ 에러 발생: [1, 2, 3]이라는 숫자 배열에는 'name'이라는 속성이 없기 때문입니다.
  // console.log(identity([1, 2, 3]));

  // ✅ 정상 작동: 객체 안에 'name' 속성이 포함되어 있어 제약 조건을 만족합니다.
  console.log(identity({ name: 'jina' }));

  // ✅ 정상 작동: name 외에 다른 속성(age)이 더 있어도 상관없습니다. 'name'만 있으면 통과!
  console.log(identity({ name: 'tom', age: 25 }));
}
