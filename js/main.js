import Circle from "./Cirlce.js";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js"
// tinh dien tich hinh vuong
let tinhDTHinhVuong = () =>{
    let side = document.getElementById("side").value ; 
    let sizeX = document.getElementById("squareX").value ;
    let sizeY = document.getElementById("squareY").value ; 
    let bgColor = document.getElementById("squareColor").value ;
    let squareObject = new Square(side , "SQUARE" , bgColor , sizeX , sizeY) ; 
    squareObject.getArea() ; 
    squareObject.draw() ; 
}
document.getElementById("areaSquare").onclick = tinhDTHinhVuong ; 
// tinh dien tich hinh chu nhat
let tinhDTHCN = () =>{
    let length = document.getElementById("recL").value ; 
    let width = document.getElementById("recW").value ;
    let sizeX = document.getElementById("recX").value ;
    let sizeY = document.getElementById("recY").value ;
    let bgColor = document.getElementById("recColor").value ;
    let rectangleObject = new Rectangle(length , width , "Rectangle", bgColor , sizeX , sizeY ) ; 
    rectangleObject.getArea() ; 
    rectangleObject.draw() ; 
}
document.getElementById("areaRec").onclick = tinhDTHCN ; 
// tinh dien tich hinh tron
let tinhDTCircle = () => {
    let radius = document.getElementById("radius").value ;
    let sizeX = document.getElementById("cirX").value ;
    let sizeY = document.getElementById("cirY").value ;
    let bgColor = document.getElementById("cirColor").value ;
    let circleObject = new Circle(radius , "Cirlce" ,bgColor , sizeX , sizeY ) ; 
    circleObject.getArea() ; 
    circleObject.draw() ; 
}
document.getElementById("areaCircle").onclick =  tinhDTCircle;