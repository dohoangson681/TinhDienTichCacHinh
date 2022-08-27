import Shape from "./Shape.js";
export default class Rectangle extends Shape {
    constructor(length , width , ...propsParent){
        super(...propsParent) ; 
        this.length = length ; 
        this.width = width ; 
    }
    getArea(){
        this.area = this.length * this.width ; 
    }
    draw(){
        document.getElementById("main").innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="height: ${this.sizeX} ;width: ${this.sizeY} ;background-color:${this.bgColor};">
        <span>${this.name} - ${this.area}</span>
        </div>
        ` ; 
    }
}