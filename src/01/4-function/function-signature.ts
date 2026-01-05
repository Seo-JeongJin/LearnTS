// function signature
// -> 함수의 매개변수와 반환값의 타입을 지정하는 것

// 1. 함수 선언문에서의 function signature
// function func(params:
//   paramType): returnType {
//     //.. code ..
// }
function printHello1(): void {
  console.log('hello');
}

function add3(n1: number, n2: number): number {
  return n1 + n2;
}

function greet1(name: string): string {
  return `Hello, ${name}`;
}

function findLongestString(strings: string[]): string {
  if (strings.length === 0) return ''; // 빈 배열이면 빈 문자열 반환

  return strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, strings[0]); // 배열의 첫 번째 항목을 초기값으로 설정
}

const words = ['apple', 'banana', 'cherry', 'watermelon'];
const longestWord = findLongestString(words);
console.log(longestWord);

// 2. 함수 표현식에서의 function signature
const printHello2: () => void = function printHello2() {
  console.log('hello');
}; // 비효율적인 방식

const add4 = function add4(n1: number, n2: number) {
  return n1 + n2;
};
console.log(add4(1, 2));

// or
// const add4: (n1: number, n2: number) => number = function add4(n1, n2) {
//   return n1 + n2;
// };

// greet2 라는 변수에는 문자열 매개변수를 하나 받고 문자열을 반환하는 함수
// const greet2: (name: string) => string (이까지가 타입 지정) = (name) => `Hello, ${name}`; (이까지가 함수 실행부(값 할당))
// 윗 주석 코드와 아래 코드는 같음
const greet2 = (name: string): string => `Hello, ${name}`;

const findLongestString1 = (strings: string[]): string => {
  if (strings.length === 0) return ''; // 빈 배열이면 빈 문자열 반환

  return strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, strings[0]); // 배열의 첫 번째 항목을 초기값으로 설정
};
// const findLongestString1: (strings: string[]) => string = (
//   strings: string[]
// ): string => {
//   if (strings.length === 0) return ''; // 빈 배열이면 빈 문자열 반환

//   return strings.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   }, strings[0]);
// }

const words1 = ['apple', 'banana', 'cherry', 'watermelon'];
const longestWord1 = findLongestString1(words1);
console.log(longestWord1);

// 3. 객체 리터럴에서의 function signature
const operations = {
  add(n1: number, n2: number): number {
    return n1 + n2;
  },
  subtract: function (n1: number, n2: number): number {
    return n1 - n2;
  },
  multiply: (n1: number, n2: number): number => n1 * n2,
};

// 4. 콜백 함수에서의 function signature
function fetchData1(callback: (data: string) => void) {
  callback('some data');
}
fetchData1((data: string): void => {
  console.log(data);
});
// --------------------------
function processData(data: string, callback: (result: string) => void) {
  const result = data.toUpperCase();
  callback(result);
}
processData('hello', (result: string): void => {
  // 여기 콜백 함수는 익명 함수 -> result를 매개 변수로 받아서 콘솔 출력 하는 함수
  console.log(result);
});
// --------------------------
function doubleNum(item: number): void {
  console.log(item * 2);
}

function powNum(item: number): void {
  console.log(item * item);
}

function processItems(items: number[], callback: (item: number) => void) {
  items.forEach((item) => {
    callback(item);
  });
}

processItems([1, 2, 3], doubleNum);
processItems([1, 2, 3], powNum);
// --------------------------
function fetchsData(
  callback: (error: Error | null, data: string | null) => void
) {
  setTimeout(() => {
    // 에러가 없는 경우
    callback(null, 'Data fetched successfully');

    // 에러가 있는 경우
    // callback(new Error('Data Fetched Failed'), null);
  }, 1000);
}

fetchsData((error: Error | null, data: string | null): void => {
  // new Error 로 던진 에러는 Error 타입로 받을 수 있음
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
// 보통 콜백 함수 형태에서 함수 시그니처를 작성할 때는 함수의 매개 변수, 함수 호출부에도 타입을 지정해주는게 일반적임
// 하지만 함수 호출부에서는 타입을 작성해주지 않아도 실제로 타입에러는 발생하지 않음
// 왜냐하면 함수의 매개변수 쪽에 타입이 지정되어졌기 때문에 타입 추론으로 자동으로 타입을 파악할 수 있기 때문
function fetchData2(callback: (data: string) => void) {
  callback('some data');
}
fetchData2((data) => {
  console.log(data);
});

function processData1(data: string, callback: (result: string) => void) {
  const result = data.toUpperCase();
  callback(result);
}
processData1('hello', (result) => {
  console.log(result);
});

function fetchsData1(
  callback: (error: Error | null, data: string | null) => void
) {
  setTimeout(() => {
    // 에러가 없는 경우
    callback(null, 'Data fetched successfully');

    // 에러가 있는 경우
    // callback(new Error('Data Fetched Failed'), null);
  }, 1000);
}

fetchsData1((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// 단, 콜백 함수 부분의 세 번째 함수와 같이 함수를 호출할 때 콜백 함수를 내부에 작성한 것이 아니라
// 외부에 정의된 함수의 참조값만 전달하는 경우에는 각각의 함수에 타입을 지정해 주는 방식을 그대로 유지해야 함
