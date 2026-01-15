{
  // 제네릭이 필수로 가지고자 하는 타입을 인터페이스나 타입별칭으로 따로 뺄 수도 있음
  interface Nameable {
    name: string;
  }

  interface Ageable {
    age: number;
  }

  function identity<T extends Nameable | Ageable>(arg: T): string | number {
    if ('name' in arg) {
      // Ageable을 만족하는 경우에는 return arg.name; 이 타입 에러 발생하므로 type guard(변수의 타입 좁히기)
      return arg.name;
    } else {
      return arg.age;
    }
    // throw new Error('error'); -> else가 없을 때 에러를 던져도 됨 or 반환 값에 void 추가
  }

  console.log(identity({ name: 'jina' }));
}

{
  // 제네릭이 필수로 가지고자 하는 타입을 인터페이스나 타입별칭으로 따로 뺄 수도 있음
  type Nameable = {
    name: string;
  };

  interface Ageable {
    age: number;
  }

  function identity<T extends Nameable & Ageable>(arg: T): string {
    // intersection을 쓰면 윗 코드에서 union을 사용했을 때와는 다르게
    // Nameable과 Ageable 둘 다 어차피 만족해야하므로 type guard가 필요없음
    // 그 대신 호출 시 name, age 속성 둘 다 필수적으로 인자로 들어가야함
    return arg.name;
  }

  // 제네릭이기 때문에 name, age만 포함돼있으면 다른 속성은 그냥 추가 가능함
  console.log(identity({ name: 'jina', age: 24, gender: 'male' })); // jina
}
