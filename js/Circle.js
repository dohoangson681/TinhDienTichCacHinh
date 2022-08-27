import Shape from "./Shape.js";
export default class Circle extends Shape{ 
    constructor(radius , ...propsParent){
        super(...propsParent) ; 
        this.radius = radius ; 
    }
    // method
    getArea(){
        const PI = 3.14 ; 
        this.area = PI * this.radius * this.radius ; 
    }
    draw(){
        document.getElementById("main").innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="height: ${this.sizeX} ;width: ${this.sizeY} ;background-color:${this.bgColor};border-radius : 50% ; ">
        <span>${this.name} - ${this.area}</span>
        </div>
        ` ; 
    }
}