# ts-all-in-one

### 타입스크립트설치

- npm init -y
- npm i typescript
- npx tsc --init

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "noImplicitAny": true,
        "strictNullChecks": true
    }
}
```

### 타입스크립트는 변수, 매개변수, 리턴값에 타입 붙이는 것!

```
const a: string = "5";
const b: number = 5
const c : boolean = true
const d : undefined = undefined;
const e : null = null
const f: any = true

/* function add(x: number, y: number): number { return x + y }
const add: (x: number, y: number) => number = (x, y) => x + y;
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 }; */

const arr : string[] = ['12','45']
const arr2 : number[] = [123,456]
const arr3 : [number,number,string] =[1,2,'33']

const obj :{lat:number,lon:number} = {lat:12,lon:2}
```
