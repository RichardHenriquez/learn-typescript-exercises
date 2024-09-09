"use strict";
//Calcular el area de un circulo
const pi = 3.14;
const area = (radio) => pi * Math.pow(radio, 2);
console.log(area(9));
//Caclular el area de un triangulo
const media = 1 / 2;
const areaTriangulo = (area, altura) => {
    return (media * area * altura);
};
console.log(areaTriangulo(5, 9));
//Calcular el area de un rectangulo
const areaRectangulo = (ancho, alto) => {
    return ancho * alto;
};
console.log(areaRectangulo(5, 9));
