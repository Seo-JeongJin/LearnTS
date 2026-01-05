// 변수를 초기화할 때 값을 할당하지 않으면 추론은 any로 됨
let k;
k = 10; // 처음에 숫자를 할당했더라도 문자, 논리형을 할당하는 것은 가능한 상태임
k = 'A'; // -> 그렇기 때문에 타입 추론을 제대로 하려면 변수 선언과 동시에 할당을 해주어야 함
k = true;

// 단, 예제 코드처럼 어떠한 API 통신의 결과 값을 변수에 할당하는
// 이러한 코드 같은 경우에는 변수를 선언과 동시에 값을 할당한다 라고 하더라도 이 API에서
// 응답받은 값이 어떠한 값인지를 알 수 없기 때문에 정상적으로 Type 추론이 되지 않고
// Any라는 Type으로 출원이 되는 것을 확인할 수 있음
// 그렇기 때문에 이럴 때는 명시적으로 Type을 선언해 주어야 함
async function fetchData() {
  const res = await (
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
  ).json();
  const result = res;
}
