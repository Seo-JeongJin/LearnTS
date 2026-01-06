// 객체 복습
// getName 함수는 매개 변수가 없는 문자열을 반환하는 함수
let user2: { name: string; age: number; getName: () => string } = {
  name: 'Jina',
  age: 24,
  getName() {
    return this.name;
  },
};
