// 1. 빈 배열
let list1: [] = [];

// 2. 숫자형 배열
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

// 3. 문자열 배열
let list4: string[] = ['a', 'b', 'c'];
let list5: Array<string> = ['a', 'b', 'c'];

// 4. 논리형 배열
let list6: boolean[] = [true, false, true];
let list7: Array<boolean> = [true, false, true];

// 5. null 배열
let list8: null[] = [null, null];
let list9: Array<null> = [null, null];

// 6. 객체 배열
let list10: { name: string }[] = [{ name: 'Jack' }, { name: 'Jane' }];
let list11: Array<{ name: string }> = [{ name: 'Jack' }, { name: 'Jane' }];

// 7. 함수 배열
let list12: (() => void)[] = [function () {}, function () {}];
let list13: Array<() => void> = [function () {}, function () {}];

// 8. 타입이 섞인 배열 (튜플)
let list14: [number, string, boolean] = [1, 'a', true]; // -> 튜플
// let list15 = [1, 'a', true]; -> 제네릭으로 타입 지정 불가
