// type alias (타입 별칭)
// -> 타입의 다른 이름이나 대체 이름을 붙이는 것

// type AliasName = Type;

type Email = string;
type Password = string;

// let e: string = 'jina@gmail.com';
// let p: string = '1234!';
let e: Email = 'jina@gmail.com';
let p: Password = '1234!';

// 그냥 스트링 타입으로 잘 지정돼있던걸 굳이 왜 타입별칭으로 바꾸나?
// 1. 의미를 보다 명확하게 전달할 수 있음
// 2. 재사용성 증가
// -> 추후에 이메일과 비밀번호를 할당해야 하는 변수를 추가적으로 생성해야 될 경우 타입 별칭으로 정해놓으면 언제든 재사용 가능
let e1: Email = 'jina@gmail.com';
let p1: Password = '1234!';
// 3. 유지보수의 용이
// -> 타입별칭에 할당된 타입을 일괄적으로 바꿔주게 되었을 경우(type Password = number;) 한 번에 변경 가능
// 4. 뛰어난 확장성 -> 여러가지 타입 지정 방법과 어우러져서 사용될 수 있음
