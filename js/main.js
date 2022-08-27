// Chua cac ham tuong tac tren UI
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";

let tinhDTHinhVuong = () => {
    let side = document.getElementById("side").value ; 
    let sizeX = document.getElementById("squareX").value ; 
    let sizeY = document.getElementById("squareY").value ;
    let bgColor = document.getElementById("squareColor").value  ;
    let squareObject = new Square( side ,"Square" , bgColor , sizeX , sizeY ) ; 
    // tinh dien tich
    squareObject.getArea() ; 
    squareObject.draw() ; 
}
document.getElementById("areaSquare").onclick = tinhDTHinhVuong ; 
let tinhDTHCN = () => {
    let length = document.getElementById("recL").value ;
    let width = document.getElementById("recW").value ; 
    let sizeX = document.getElementById("recX").value ;
    let sizeY = document.getElementById("recY").value ;
    let bgColor = document.getElementById("recColor").value ;
    let rectangleObject = new Rectangle(length , width , "Rectangle" , bgColor , sizeX , sizeY) ; 
    rectangleObject.getArea() ; 
    rectangleObject.draw() ; 
}
document.getElementById("areaRec").onclick = tinhDTHCN ; 
let tinhDTCircle = () => {
    let radius = document.getElementById("radius").value ;
    let sizeX = document.getElementById("cirX").value ;
    let sizeY = document.getElementById("cirY").value ;
    let bgColor = document.getElementById("cirColor").value ; 
    let cirlceObject = new Circle(radius , "Circle" , bgColor , sizeX , sizeY ) ; 
    cirlceObject.getArea() ; 
    cirlceObject.draw() ; 
}
document.getElementById("areaCircle").onclick = tinhDTCircle ; 