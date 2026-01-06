// readonly
// -> 객체 타입을 지정할 때 객체 타입으로 지정되는 속성의 값을 수정하지 못하게 함

let player1: {
  name: string;
  readonly age: number;
} = {
  name: 'Jina',
  age: 24,
};

player1.name = 'Miharu';
// player1.age = 23; // age는 readonly 프로퍼티이므로 값을 변경할 수 없음

console.log(player1);
