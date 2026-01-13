interface User2 {
  name: string;
  age: number;
  gender?: 'male' | 'female';
}

const player3: User2 = {
  name: 'hirosi',
  age: 35,
  // gender: 'male'
};
