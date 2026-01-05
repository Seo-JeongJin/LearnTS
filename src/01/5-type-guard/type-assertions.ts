// type assertions - 타입 단언
// -> 특정 데이터가 어떠한 타입을 가진다고 확실할 때 사용하는 문법
// -> 타입스크립트 컴파일러에게 이 데이터는 내가 지정한 타입이 맞다고 알려주는 역할

const num2: unknown = 10.12;
// const fixedNum = typeof num2 === 'number' && num.toFixed(1); // num2의 타입이 number 면 오른쪽 실행
// const fixedNum = (<number>num2).toFixed(1); // num2의 타입이 number 라고 단언함
const fixedNum = (num2 as number).toFixed(1); // num2의 타입이 number 라고 단언
console.log(fixedNum);
