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

### 1.promsie와 callback 차이점

내용은 실행되었지만 아직 결괄르 반환하지 않은 객체
resolve reject는 동기로 실행하고 결과는 반환하지 않고 들고있음.
원할때 then이나 catch로 받을 수 있음

callback은 항상 코드가 실행과 결과를 반환하는 객체
callback함수 사용시 콜백함수를 만들때마다 분리가 안되고 가독성이 떨어져 들여쓰기도 되는 현상(프로미스지옥도 thenthenthenthen으로 있을 수 있음)

코드를 분리 할 수 있냐 없냐의 차이

node 생태계가 callback에서 promise로 전환되고있음.

+최신은 promise all 말고 promise allsettled 씀(실패한것만추릴수있음)

### 2. async과 await

callback 지옥이 있다면 promise도 thenthenthenthen을 연달아쓰면 promise 지옥이 생길것임 await을 붙여 then을 대체함
일반적인 promise와 다르게 위에서부터 밑으로 왼쪽에서 오른쪽으로 코드가 읽히지 않고 오른쪽에있는 코드결과가 왼쪽 선언부에서 받는다.
await을 쓰려면 함수에 async붙이는 문법인데
요즘 탑레벨 await이란 개념이 있어서 자바스크립트가 좀 더 편한 쪽으로 발전하고 있음

- async에서 return값은 then으로 받아야함
- async/await 은 reslove만있고 reject처리하는 부분이없어서 trycatch문으로 감싸야함

Q.실무에서 프로토타입에대한 이해도가 필요한가요 ?
클래스기반이아니라 함수기반으로 하기 때문에 안쓰긴함.
제가 함수형프로그래밍을 하는건아닌데 함수위주로 코드를 짜도 프로토타입안씀(개인적견해)

### 3.버블링/캡처링

버블링?
html의 특성인데 예를들어 테이블에 있는 칸하나를 클릭이벤트로 클릭하면 부모를 타고 위로 올라감 최상위 객체까지
(이벤트 위임했을때 자연스럽게 발생)
+currntTarget은 실제로 이벤트 붙인곳
+eventTarget 실제 클릭한곳

- e.stoppropogation 스탑프로포게이션
  원하는 타겟에 이벤트를 주었는데 그 자식 태그에 이벤트가 트리거 됐을때 부모에게도 퍼지니까 이럴때 필요할것같음

캡처링?
버블링과 반대로 부모를 클릭했을때 반대로 자식에게까지 퍼지는 현상
웹에서 팝업을 만들었는데 팝업 바깥쪽 화면을 클릭하면 팝업을 닫게 하는 기능을 추가할때 이벤트 캡처링사용

기본은 버블링 캡처링은 달아줘야함 usecapture

### 4.클로져

//클로저문제 >스코프 비동기 var(쓰레기)
// 클로저를 사용해서 해결하는 문제
// for문과 비동기를 함께 사용하면 발생

- var는 {} 블록스코프가 아니라 함수스코프로 따름
- 두 개의 함수로 만들어진 환경으로 특별한 객체의 한 종류

-> 외부 함수 호출이 종료되더라도 외부 함수의 지역 변수 및 변수 스코프 객체의 체인 관계를 유지할 수 있는 구조를 클로저라고 합니다.
