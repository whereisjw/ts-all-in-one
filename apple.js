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
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = "kim";
        this.name = a + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = "park";
    };
    return User;
}());
var 유저1 = new User("민수");
유저1.이름변경함수();
console.log(유저1);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var 자식 = new Person("kim");
console.log(자식);
