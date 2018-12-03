import{Point} from "./point";
let a: number;
let b: boolean;
let c: string;
let d: any;
let f: number[] = [1,2,3];
let g: any[] =[1,true,"a"];
//tsc --target ES6 main.ts && node main.js
//tsc --target ES6 point.ts && tsc --target ES6 main.ts && node main.js

const h=3.14;

enum tjedan {Pon=0, Uto=2,Sri=3,Cet=4}

d="abc";    //
let cc=(<string>d).endsWith("c");
let ccc=(d as string).endsWith("c");

//arrow function
let log = function(message){
    console.log(message);
}
let logg = message=>console.log(message);

//inteerface
interface Tocka{
    x:number,
    y:number,
    draw: ()=>void
}
let drawPoint = (point: Point)=>{
    //...
}

let point = new Point(1,2);
point.draw();
let point2=new Point();
point2.x=1;
point2.y=2;

point.getDistance(point2);
/*
function doshit(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    console.log(i);
}
var mess="Halo svijete!";
log(mess);
*/