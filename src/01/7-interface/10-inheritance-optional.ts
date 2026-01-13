// 인터페이스 상속을 구현할 때 옵셔널 속성으로 처리가 되어져 있는 속성 또한 상속의 대상이 됨

interface Vehicle {
  brand: string;
  year?: number;
}

interface Car extends Vehicle {
  wheels: number;
}

const car: Car = {
  brand: 'Bmw',
  // year: 1999,
  wheels: 4,
};
