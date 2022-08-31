export default class Shape{
    // properties
    constructor(name , bgColor , sizeX , sizeY){
        this.name = name ; 
        this.bgColor = bgColor ; 
        this.sizeX  = sizeX ; 
        this.sizeY = sizeY ; 
        this.area = 0  ; 
    }
    // methods
    getArea(){
        return this.area = 0 ;
    }
    draw(){
        document.getElementById("main").innerHTML = "Shape Undefined" ; 
    }
}