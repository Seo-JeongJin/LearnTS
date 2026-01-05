// undefined: 보통 변수를 선언하고 값을 할당하지 않았을 때 자바스크립트의 엔진이 자동으로 초기화할 때
// null: 개발자가 의도적으로 변수의 값을 비워두고자 할 때 사용
// -> 다른 값이 할당될 가능성이 있는 상태를 의미하는 값이라는 점은 공통적
// 그러므로 undefined와 null의 타입 추론을 할 때 any라고 추론을 하는 것은 아주 타당함
// 왜냐하면 그래야 나중에 null과 undefined 값이 할당된 변수에 다른 의미 있는 값을 넣을 수 있기 때문
// 하지만 이는 typescript의 취지와 맞게 사용하는 것은 아니기 때문에
// undefined, null에 있어서 만큼은 각각 정확히 지정해주는게 맞음

let und2 = undefined;
let nul2 = null;

und2 = 'A';
nul2 = 10;

let und3: undefined | string = undefined;
let nul3: null | number = null;

und3 = 'A';
nul3 = 10;
