// tao Class Cha cho ke thua
export default class Shape{
    constructor(name , bgColor , sizeX , sizeY ){
        this.name = name ; 
        this.bgColor = bgColor; 
        this.sizeX = sizeX ; 
        this.sizeY = sizeY ; 
        this.area =  0 ; 
    }
    // method
    getArea(){
        this.area = 0 ; 
    }
    draw(){
        document.getElementById("main").innerHTML = "No Shape" ; 
    }
}