// [개념] 제네릭을 쓰면 여러 타입을 위한 오버로딩이 불필요

// 오버로딩 방식
function wrapValue(value: number): { value: number };
function wrapValue(value: string): { value: string };
function wrapValue(value: any) {
  return { value };
}

console.log(wrapValue(1));
console.log(wrapValue('Hello'));

// 제네릭 방식
function wrap<T>(value: T): { value: T } {
  return { value };
}

const a = wrap(10); // { value: number }
const b = wrap('타입스크립트'); // { value: string }
// 유지보수 및 확장성에서 제네릭이 훨씬 좋음!
