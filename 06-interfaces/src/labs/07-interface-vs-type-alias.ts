// [문제]
// 아래 두 코드에서 kimUser, yunUser 모두 { id: number; name: string } 구조를 가져야 하며, 타입 별칭과 인터페이스를 각각 이용해서 타입을 선언하세요.

type UserT = {
  id: number;
  name: string;
};

interface UserI {
  id: number;
  name: string;
}

const kimUser: UserI = { id: 10, name: '김유저' };
const yunUser: UserT = { id: 20, name: '윤유저' };

// 아래 nabiCat, ggomaCat은 각각 "sound, color" 속성이 모두 필요하며
// 하나는 인터페이스 상속, 하나는 타입 별칭 교차(&)로 작성하세요.

interface Animal {
  color: string;
}
interface CatI extends Animal {
  sound: string;
}

type Color = {
  color: string;
};
type Sound = {
  sound: string;
};
type Cat = Color & Sound;

const nabiCat: CatI = { sound: '야옹', color: '고등어' };
const ggomaCat: Cat = { sound: '냐옹', color: '삼색이' };
