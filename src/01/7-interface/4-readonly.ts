// 인터페이스든 객체든 readonly 속성은 사용가능함

interface Player {
  name: string;
  readonly age: number;
  gender: 'male' | 'female';
}

const friend: Player = {
  name: 'lim',
  age: 24,
  gender: 'male',
};

friend.name = 'jimin';
// friend.age = 24; -> readonly 키워드는 gender 속성의 값은 변경 불가능한 읽기 전용 속성으로 변경됨
friend.gender = 'female';
