/* const a: string = "5";
const b: number = 5
const c : boolean = true
const d : undefined = undefined;
const e : null = null
const f: any = true
 */
/* function add(x: number, y: number): number { return x + y }
const add: (x: number, y: number) => number = (x, y) => x + y;
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 }; */
/* function add(x:number,y:number):number;
function add(x,y){
    return x+y
}

let aa = 123;
aa = 'hello' as unknown as number */
/* function add(x:number,y:number):number {return x+y} */
/* const result = add(1,5)


const arr : string[] = ['12','45']
const arr2 : number[] = [123,456]
const arr3 : [number,number,string] =[1,2,'33'] // 튜플타입

const obj :{lat:number,lon:number} = {lat:12,lon:2} */
/* const head:Element = document.querySelector('#head')!;
console.log(head); */
/* const head = document.querySelector('#head');
if (head) {
    head.innerHTML = 'hello world'
  console.log(head);
} */
/*
const a: string = 'hello'
const b:String = 'hi' */
/* type World = "world" | "hell"; */
// type Greeting = "hello world"
/* type Greeting = `hello ${World}`; */
/* const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;

  const a = ODirection.Up */
/* type A = { a: string };
const a: A = { a: 'hello' };

interface B { a: string };
const b: B = { a: 'hello' }; */
/* type Animal = {breath:true}
type 포유류 = Animal&{breed:true}
type Human = 포유류&{think:true}

const zeroCho :Human = {breath:true,breed:true,think:true} */
// 네이밍룰 ? type interface
// interface에는 I type에는 T enum에는 E 붙이는 방법이 있음
// 요즘에는 안붙이는게 국룰임(마우스 올리면 다 나옴, 그리고 interface 나눠서 굳이 이득이 없음)
// 근데 나는 개인적으로 붙임 그래야 가독성이 더 좋은것같음
/* type A = string | number; //넓은타입
type B = string; // 좁은타입
type C  = string & number; // 공집합

type ObjA = {name:string}//넓은타입
type ObjB = {age:number}// 넓은타입
type ObjC = {name:string,age:number}//좁은타입
type ObjAB = A|B
// 객체는 상세할수록 좁은타입
// any는 합집합 never는 공집합이라고 생각하면된다. */
/* function a():void{
  return undefined
} */
//원시값 타입가드
/* function numOrStr(a: number | string) {
  if (typeof a === 'string') {
    a.split(',');
  } else {
    a.toFixed(1);
  }
  
}

 function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);
  } else {
    a.toFixed(1);
  }
}


type B = { type: 'b', bbb: string };
type C = { type: 'c', ccc: string };
type D = { type: 'd', ddd: string };
type A = B | C | D;
function typeCheck(a: A) {
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}
 */
/*
interface Cat { meow: number }
interface Dog { bow: number }
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) { return false }
  return true;
}
const cat: Cat | Dog = { meow: 3 }
if (catOrDog(cat)) {
    console.log(cat.meow);
}
if ('meow' in cat) {
    console.log(cat.meow);
}

const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected';
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected);
 */
/* Promise -> Pending -> Settled(resovled, Rejected) */
/* const x: {} = "hello";
const y: Object = "hi"; //대문자 Object와 {} 는 모든타입 (null과 undefined 제외)

//unknown = {} | null | undefined */
/* interface A {
  a: string;
  b: string;
  c: string;
}

interface A {
  [key: string]: string;
} //인덱스 시그니처

type B = "Human" | "Mammal" | "Animal";
 */
/* class A {
  a: string;
  b: number;
  constructor(a: string, b: number = 123) {
    this.a = "123";
    this.b = 123;
  }
}

const a = new A("zz");

type AA = A; */
/* interface AZ {
  a: string;
  b: string;
}

class B implements AZ {
  private a = "12";
  protected b = "11";
} */
// interface 에 implements 는 굳이 쓸필요없지만 객체지향언어에서 추상에 의존하지말고 구현에 의존해야할때는 사용
// (public) vs private vs protected
// 둘다 해당클래스 내부에서 사용이 가능함
// protected private 둘다 인스턴스에서 사용이 불가능함
// protected 는 extends로 상속받은 class에서는 사용이 가능함
/* function add<T>(x: T, y: T): T {
  return x + y;
}

add(1, 2);
 */
/* const a = (b: { children: string } = { children: "zero" }) => {};

const add = <T extends string>(x: T, y: T) => ({ x, y });
 */
/* interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}

[1, 2, 3].forEach((v) => {
  console.log(v);
});

["1", "2", "3"].forEach((v) => {
  console.log(v);
});

interface IString<T> {
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}

const strings = [1, 2, 3].map((v) => v.toString()); */
