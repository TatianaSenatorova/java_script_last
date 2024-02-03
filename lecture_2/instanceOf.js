'use strict';

//instanceOf - поможет для определения , принадлежит ли объект к предлагаемому классу. Либо к одному из встроенных классов, как в примере с Array. Или для функций - конструкторов. 

//определение класса
class Animal {
    constructor(name){
        this.name = name;
    }
}

//Определение класса Dog, который наследуется из класса Animal

class Dog extends Animal{
    bark(){
        console.log("Woof!");
    }
}

//Создание объектов
const animal = new Animal ('Animal');
const dog = new Dog('Dog');

//Проверка с помощью instanceOf
console.log(animal instanceof Animal); //Выводит true, так как animal является экземпляром класса Animal

console.log(dog instanceof Animal);///Выводит true, так как dog является экземпляром класса Animal (наследуюется от Animal)
console.log(dog instanceof Dog); //Выводит true, так как dog является экземпляром класса Dog

console.log(animal instanceof Dog); //Выводит false, так как animal не является экземпляром класса Dog

//проверка на экземпляр несуществующего класса
console.log(dog instanceof Cat); //instanceOf.js:33 Uncaught ReferenceError: Cat is not defined
