// 1. <타입>값 (Angle-bracket syntax):
const inputElement = <HTMLInputElement>document.getElementById('input');

// 사용 예시
if (inputElement) {
  inputElement.value = 'Hello, TypeScript!'; // HTMLInputElement의 속성에 접근
}

// 2. 값 as 타입 (as-syntax):
const inputElement2 = document.getElementById('input') as HTMLInputElement;

// 사용 예시
if (inputElement2) {
  inputElement2.value = 'Hello, TypeScript!';
}
