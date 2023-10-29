### 스코프체인

```
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
  const x = "x";
  console.log("a");
  b();
}

a(); //  a 찍히고 레퍼런스에러 b is not define
```

### this

- 기본적으로 window,global이고 strict mode 에서는 undefine이 되고
- 화살표함수는 부모의 this 물려받는것
- 매서드 붙여서 this 부여하는 법 bind,call,apply로 this를 조작 할 수 있다
- 호출스택을 그릴때 this를 정할 수 있다.

```
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




// 호출스택순서 어노니머스 >  obj.sayName(this는 object) > log 원키 > log 원키

obj = {
  name: "wonkie",
  sayName() {
    console.log(this.name);
  fucntion inner() {
      console.log(this.name);
    };
    inner();
  },
};

obj.sayName(); //wonkie 한번 undefine 한번


sayName.bind({ name: "jiwoncho" })();
sayName.apply({ name: "jiwoncho" });
sayName.call({ name: "jiwoncho" });
```
