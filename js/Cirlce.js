import Shape from "./Shape.js";
export default class Circle extends Shape {
    constructor(radius , ...propsParent){
        super(...propsParent) ; 
        this.radius = radius ; 
    }
    getArea(){
        const PI = 3.14 ; 
        return this.area = PI * this.radius * this.radius ; 
    }
    draw(){
        document.getElementById("main").innerHTML = `
            <div class = "d-flex justify-content-center align-items-center"  style="height:${this.sizeY} ;width: ${this.sizeX};background:${this.bgColor}; border-radius : 50% ;">${this.name} - ${this.area} </div>
            `;
    }
}