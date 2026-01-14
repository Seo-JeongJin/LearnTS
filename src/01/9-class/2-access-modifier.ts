// access modifier (접근 제어자)
// 1. public
// -> 기본적으로 아무런 접근 제어자가 사용되지 않았을 때 public
// -> 클래스의 속성과 메서드들을 클래스 내부든 외부든 자유롭게 사용 가능
// 2. private
// -> 클래스 내부에서만 접근할 수 있게 함
// 3. protected
// -> 기본적으로 클래스 내부에서만 접근이 가능하고 해당 클래스를 상속받은 클래스에서도 접근 가능

class People1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected updateName(name: string): void {
    this.name = name;
    console.log(`이름이 ${name}(으)로 변경되었습니다.`);
  }
}

class Employee extends People1 {
  private employeeId: number; // Employee 클래스 고유 속성

  constructor(name: string, age: number, employeeId: number) {
    super(name, age); // 부모 생성자 초기화(호출)
    this.employeeId = employeeId;
  }

  getEmployeeDetails(): string {
    return `직원 이름: ${this.name}, 나이: ${this.age}, 직원 ID: ${this.employeeId}`;
  }

  updateEmployeeName(newName: string): void {
    this.updateName(newName); // 부모 클래스 메서드 사용 (protected는 가능)
  }
}

const employee1 = new Employee('yamamoto', 20, 12);
console.log(employee1);
console.log(employee1.getEmployeeDetails());
employee1.updateEmployeeName('satou');
console.log(employee1.getEmployeeDetails());

// p5.updateName('yui'); -> protected 키워드로 접근 불가능
// p5.name = 'asd'; // -> private을 사용하지 않으면 객체의 속성에 그대로 접근 가능함
