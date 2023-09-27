const a: string = "5";
const b: number = 5
const c : boolean = true
const d : undefined = undefined;
const e : null = null
const f: any = true

/* function add(x: number, y: number): number { return x + y }
const add: (x: number, y: number) => number = (x, y) => x + y;
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 }; */


function add(x:number,y:number):number;
function add(x,y){
    return x+y
}

let aa = 123;
aa = 'hello' as unknown as number

/* function add(x:number,y:number):number {return x+y} */
const result = add(1,5)


const arr : string[] = ['12','45']
const arr2 : number[] = [123,456]
const arr3 : [number,number,string] =[1,2,'33'] // 튜플타입

const obj :{lat:number,lon:number} = {lat:12,lon:2}