import Shape from "./Shape.js";
export default class Square extends Shape{
    constructor(side , ...propsParent){
        super(...propsParent) ; 
        this.side = side  ; 
       }
    getArea(){
        this.area = this.side * this.side ; 
    }
    draw(){
        document.getElementById("main").innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="height: ${this.sizeX} ;width: ${this.sizeY} ;background-color:${this.bgColor};">
        <span>${this.name} - ${this.area}</span>
        </div>
        ` ; 
    }
}