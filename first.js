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
