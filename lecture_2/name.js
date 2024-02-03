'use strict';

// function sayHello() {
//    console.log('Hello!'); 
// }
// console.log(sayHello.name); //Выводит имя функции 'sayHello'

// console.log(window.name); //Выводит имя окна браузера, пустую строку или имя окна, если оно было задано

// console.log(frames[0].name); //выводит имя фрейма (если было задано) или пустую строку  

// const obj = {};

// console.log(obj.name);//undefined, так как свойство name не было опеределено для объекта


//когда говорим об объектах, очень частое явление, когда используются классы

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle (10, 5);

console.log(rect.constructor.name); //выводит имя класса Rectangle


