// union type (| -> pipe) -> 실제로 js의 or 연산자와 비슷한 역할을 함
// union 타입은 하나의 변수가 여러 개의 타입을 가질 수 있음을 나타내기 위해서 사용하는 타입
let union: number | string | boolean = 10;
union = 'A';
union = true;
