'use strict';

const string = 'hello';
console.log(string[2]);
console.log(string.length);
for (let str of string) {
  console.log(str);
};

//как быть в ситуации, когда мы хотим выполнять какое-то действие, причем очень объемное

let range = {
    from: 1,
    to: 17
};

//1. вызов for...of сначала вызывает эту функцию
range[Symbol.iterator] = function (){
    //...она возвращает объект итератора:
    //2. Далее for(..of..) работает только с этим итератором, запрашивая у него новые значения. 
    return{
        current: this.from,
        last: this.to,
        //3. next() вызывается на каждой итерации цикла for(..of..) 
        next(){
            //проверяется, текущее значение меньше равно следующего 
            return this.current <= this.last ? { done: false, value: this.current++} : {done: true};
        }
    };
};

for (let number of range) {
  console.log(number);
}

//выводятся числа от 1 до 17-ти

//Метод next() возвращает объект с двумя свойствами done и value. Также вы можете задать параметр для метода next, чтобы отправить значение в генератор.
//done (boolean)
//Имеет значение true, если итератор находится за окончанием итерируемой последовательности. В этом случае value может указывать возвращаемое значение итератора.
//Имеет значение false, если итератор может создать следующее значение в последовательности. Это эквивалентно вообще не указанному свойству done.
//value - любое JavaScript значение, возвращаемое итератором. Может быть опущено, когда done имеет значение true.


//можно было бы и вместе все написать, но тогда this будет общий


//но ниже не рекомендует на начальном этапе делать как ниже, так как можно заблудиться с this
// let range = {
//     from: 1,
//     to: 17,
//     [Symbol.iterator](){
//         this.current = this.from;
//         return this;
//     },
//     next(){
//         return this.current <= this.to ? { done: false, value: this.current++} : {done: true};
//     }
// };
// for (let number of range) {
//     console.log(number);
    
// }

//-----------Array.from-------
//позволяет создавать массивы из итерируемых объектов

let pseudo = {
  0: 'first',
  1: 'second',
  length: 2
}
let array = Array.from(pseudo);

//теперь можно применять методы массивов. С массивами очень удобно работать потому, что очень много методов
console.log(array);
console.log(array.pop());

//как быть в ситуации, когда у нас есть текст?

let pseudo2 = 'It`s a text';
let array2 = Array.from(pseudo2);
console.log(array2);
