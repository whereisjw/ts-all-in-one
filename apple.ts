/* class User {
  public name = "kim";
  constructor(a) {
    this.name = a;
  }
  public 함수() {}
}
//필드만드나 constructor로 만드나 결과는 같음
// public 붙으면 모든 자식들이 이용가능
// private 붙으면 클래스 안에서만 수정가능
// 기본적으로 안적으면 public이 생략되있음
let 유저1 = new User("park");
유저1.name = "ㅎㅇ";
 */
/* 
class User {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }
  이름변경함수() {
    this.familyName = "park";
  }
}
let 유저1 = new User("민수");

유저1.이름변경함수();
console.log(유저1);

class Person {
  constructor(private name: string) {}
}

let 자식 = new Person("kim");
console.log(자식);
 */

/* class User {
  protected x = 10;
}

// private과 유사 하지만 extends 된 class에서 사용가능

class newUser extends User {
  doThis() {
    this.x = 20;
  }
}
 */
/* class User {
  static x = 10;
  y = 10;
}

let 자식 = new User(); */
// static키워드 부모 class에 직접 부여됨 자식들은 물려받지못함
// class의 주요기능인 object복사기능을 막는 역할
// private / protected / public 과 동시에 사용가능

class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}

let 철수 = new User();

User.skill = "ts";
let 철수2 = new User();

console.log(철수, 철수2);
