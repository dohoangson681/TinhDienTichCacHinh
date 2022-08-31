import Shape from "./Shape.js";
export default class Square extends Shape{
    constructor(side , ...propsParent){
        super(...propsParent) ; 
        this.side = side ; 
        }
        getArea(){
            return this.area = this.side * this.side ; 
        }
        draw(){
            document.getElementById("main").innerHTML = `
            <div class = "d-flex justify-content-center align-items-center"  style="height:${this.sizeY} ;width: ${this.sizeX};background:${this.bgColor};">${this.name} - ${this.area} </div>
            `;
        }
}