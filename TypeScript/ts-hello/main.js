//tsc --target ES6 main.ts && node main.js
let a;
let b;
let c;
let d;
let f = [1, 2, 3];
let g = [1, true, "a"];
const h = 3.14;
var tjedan;
(function (tjedan) {
    tjedan[tjedan["Pon"] = 0] = "Pon";
    tjedan[tjedan["Uto"] = 2] = "Uto";
    tjedan[tjedan["Sri"] = 3] = "Sri";
    tjedan[tjedan["Cet"] = 4] = "Cet";
})(tjedan || (tjedan = {}));
d = "abc"; //
let cc = d.endsWith("c");
let ccc = d.endsWith("c");
//arrow function
let log = function (message) {
    console.log(message);
};
let logg = message => console.log(message);
let drawPoint = (point) => {
    //...
};
let point = new Point(1, 2);
point.draw();
let point2 = new Point();
point2.x = 1;
point2.y = 2;
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
