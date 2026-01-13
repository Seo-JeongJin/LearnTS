// 공통된 타입이 하나의 유저 객체에 정의가 될 때마다 반복되어져서
// 코드의 가독성 및 유지보수를 좋지 않게 함
// 객체의 속성이 바뀐다 라고 한다면 다같이 바꿔줘야 하는 상황이 올 수도 있기 때문

const japanese1: { name: string; age: number; gender: 'male' | 'female' } = {
  name: 'miharu',
  age: 23,
  gender: 'female',
};

const japanese2: { name: string; age: number; gender: 'male' | 'female' } = {
  name: 'ayaka',
  age: 30,
  gender: 'female',
};

const korean1: { name: string; age: number; gender: 'male' | 'female' } = {
  name: 'jina',
  age: 24,
  gender: 'male',
};
