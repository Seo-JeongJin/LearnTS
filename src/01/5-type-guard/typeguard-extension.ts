// type guard는 타입을 추론할 수 있게 조건문 같은 것들을 사용해서
// 타입을 좁혀주는 문법 자체를 타입가드라고 하는 것이기에 타입만 좁혀준다면 typeof 키워드가 아니어도 됨

function example(a: string | null) {
  if (typeof a === 'string') return a.toUpperCase();
  // if (a) return a.toUpperCase(); // a가 truthy 일 때
  // if (a !== null) return a.toUpperCase(); // a가 null이 아닐 때
  // return a?.toUpperCase(); // a라는 값이 존재하면 toUpperCase() 메소드 적용 -> optional chaining
}

function returnName(obj: {}) {
  // return obj.name; // -> 안됨, obj 안에 name 프로퍼티가 없을 수도 있기 때문
  if ('name' in obj) return obj.name;
}
