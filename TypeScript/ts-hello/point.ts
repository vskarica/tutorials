//class
export class Point{
    //_x:number; //feild
    //_y:number;
    //constructor(_x?:number,_y?:number){
    constructor(private _x?:number,private _y?:number){
        this._x=_x;
        this._y=_y;
    }
    get x(){    //property
        return this._x;
    }
    get y(){    //method
        return this._y;
    }
    set x(value){
        if(value<0)
            throw new Error("must be >0");
        this._x=value; 
    }
    set y(value){
        if(value<0)
            throw new Error("must be >0");
        this._y=value; 
    }
    draw(){
        console.log("X:"+this.x+", Y:"+this.y)
    }
    getDistance(another: Point){
        console.log("X:"+this.x+"-"+another.x+", Y:"+this.y+"-"+another.y)
    }
}
