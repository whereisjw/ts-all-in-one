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
  constructor(public name: string) {}
}

let 자식 = new Person("kim");
console.log(자식);
