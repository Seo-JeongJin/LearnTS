// Non null assertion operator
// -> 보통은 null 값을 처리하기 위해서 if 문을 사용해서 truthy 값을 체크하거나
// 불일치 연산자를 사용하거나, 옵셔널 체이닝 연산자를 사용
// 하지만 타입스크립트에서는 null 값을 처리하기 위한 특별한 연산자를 하나 더 제공 => 널 아님 단언 연산자
// -> 타입스크립트 컴파일러에게 해당 데이터는 Null이 아님을 단언하는 연산자임
// -> ! 를 만나면 해당 데이터가 실제로 null 이더라도 null이 아니라고 인식하게 됨

function numberFixed(num: number | null) {
  // Truthy
  if (num) {
    console.log(num.toFixed(1));
  }

  // 불일치
  if (num !== null) {
    console.log(num.toFixed(1));
  }

  // 옵셔널 체이닝
  console.log(num?.toFixed(1));

  // 널 아님 단언 연산자(Non-null assertion operator) !
  console.log(num!.toFixed(1));
}

// null 아님 단언 연산자는 컴파일러에게 null이 아니다라고 알려주는 것이기 때문에
// 타입스크립트는 ! 표시된 데이터가 당연히 null 값이 아닐거라고 생각하고 코드를 수행하게 됨
numberFixed(null); // -> 런타임 때 에러 발생
// 개발자가 100% 특정 데이터가 null이 아니다라는 것을 확신할 수 있을 때만 사용하는 것이 좋다
