import Shape from "./Shape.js";
export default class Rectangle extends Shape {
    constructor(length , width , ...propsParent){
        super(...propsParent) ; 
        this.length = length ; 
        this.width = width ; 
       
    }
    getArea(){
        return this.area = this.length * this.width ; 
    } 
    draw(){
        document.getElementById("main").innerHTML = `
        <div class = "d-flex justify-content-center align-items-center"  style="height:${this.sizeY} ;width: ${this.sizeX};background:${this.bgColor};">${this.name} - ${this.area} </div>
        `;
    } 
}