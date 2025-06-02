// extends, keyof, infer
// 조건부 타입 (Conditional Types)
// 매핑된 타입 (Mapped Types)
// 유틸리티 타입 (Utility Types)
//

// extends
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // T는 Lengthwise를 확장하므로 length 속성이 있음을 보장
  return arg;
}

// 올바른 사용: length 속성이 있는 객체
loggingIdentity({ length: 10, value: 'hello' });

// 오류: length 속성이 없음
// loggingIdentity(3); // Error: Argument of type '3' is not assignable to parameter of type 'Lengthwise'.

// keyof
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // obj의 key 속성에 접근할 수 있음을 보장
}

let x = { a: 1, b: 2, c: 3 };

getProperty(x, 'a'); // OK
// getProperty(x, "d"); // Error: Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'.

// infer

// 조건부 타입 (Conditional Types)
type IsString<T> = T extends string ? 'Yes' : 'No';

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

// 매핑된 타입 (Mapped Types)
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

type ReadonlyTodo = Readonly<Todo>;
// ReadonlyTodo는 { readonly title: string; readonly description: string; } 와 같습니다.

// 유틸리티 타입 (Utility Types)

// 3. 유틸리티 타입 (Utility Types)

// TypeScript에서 기본으로 제공하는 내장 제네릭 타입들로, 흔히 사용되는 타입 변환 패턴을 미리 정의해 둔 것입니다. 자주 사용되는 몇 가지 예시는 다음과 같습니다.

//     Partial<T>: T의 모든 프로퍼티를 선택적(?)으로 만듭니다.
//     TypeScript

// type PartialTodo = Partial<Todo>; // { title?: string; description?: string; }

// Required<T>: T의 모든 프로퍼티를 필수로 만듭니다.
// TypeScript

// type Required<T> = { [P in keyof T]-?: T[P] }; // `-?`는 선택적 속성을 제거합니다.

// Readonly<T>: T의 모든 프로퍼티를 읽기 전용(readonly)으로 만듭니다. (위에서 예시)
// Pick<T, K>: T에서 K에 해당하는 프로퍼티들만 선택하여 새로운 타입을 만듭니다.
// TypeScript

// type PickedTodo = Pick<Todo, "title">; // { title: string; }

// Omit<T, K>: T에서 K에 해당하는 프로퍼티들을 제외하여 새로운 타입을 만듭니다.
// TypeScript

// type OmittedTodo = Omit<Todo, "description">; // { title: string; }

// Exclude<T, U>: T에서 U에 할당 가능한 타입을 제외합니다.
// TypeScript

// type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

// Extract<T, U>: T에서 U에 할당 가능한 타입만 추출합니다.
// TypeScript

// type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

// NonNullable<T>: T에서 null과 undefined를 제외합니다.
// TypeScript

//     type T0 = NonNullable<string | number | undefined>; // string | number
