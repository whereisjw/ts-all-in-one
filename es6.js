/* var y = "hehe";
function c() {
  const y = "y";
  console.log("c");
  function b() {
    const z = "z";
    console.log("b");
    c();
  }
}

function a() {
  console.log("a");
  b();
  console.log(x);
  const x = "x"; //TDZ
}
const z = "g";
/*  a(); */ //  a 찍히고 레퍼런스에러 b is not define */

/* console.log(this); // {}

function a() {
  "use strict";
  console.log(this);

  inner();
}
a(); //undefine */

function Human(name) {
  this.name = name;
}

new Human("hi");

obj = {
  name: "wonkie",
  sayName() {
    console.log(this.name);
    inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

obj.sayName(); //wonkie가 두번나옴

/* sayName.bind({ name: "jiwoncho" })();
sayName.apply({ name: "jiwoncho" });
sayName.call({ name: "jiwoncho" });
 */
