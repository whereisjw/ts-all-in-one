var a = "5";
var b = 5;
var c = true;
var d = undefined;
var e = null;
var f = true;
function add(x, y) {
    return x + y;
}
var aa = 123;
aa = 'hello';
/* function add(x:number,y:number):number {return x+y} */
var result = add(1, 5);
var arr = ['12', '45'];
var arr2 = [123, 456];
var arr3 = [1, 2, '33']; // 튜플타입
var obj = { lat: 12, lon: 2 };
/* const head:Element = document.querySelector('#head')!;
console.log(head); */
var head = document.querySelector('#head');
if (head) {
    head.innerHTML = 'hello world';
    console.log(head);
}
