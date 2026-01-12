interface User3 {
  // name: string;
  // gender: string;
  // address: string;
  [key: string]: string; // 키를 문자열로 가지고 값을 문자열로 가지는 속성 타입에 한해서는 동적으로 추가할 수 있는 상태
}

const girlfriend: User3 = {
  name: 'Miharu',
  gender: 'female',
  address: 'gihu',
  // age: 23
};
