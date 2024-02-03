'use strict';

const symbol = Symbol(); //объявление
const dogID = Symbol('dog'); //значение уникально даже если мы создадим символ с одинаковым описанием

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');
console.log(dog1); //Symbol(dog)
console.log(dog2); // Symbol(dog)

console.log(dog1 == dog2); //false

//alert(dogID);//Uncaught TypeError: Cannot convert a Symbol value to a string //при выводе на страницу сложности, но идентификаторы важны именно для нас а не для вывода на страницу 
console.log(dogID); ////Symbol(dog)

// если делаем так:
console.log(dogID.description); //dog

//let id = Symbol('dogID');
//let buddy = {
   // [id]: 'Жучка'
//}
//console.log(buddy[id]); //Жучка

//let id = Symbol('id');
//let buddy = {
//    [id]: 'Жучка'
//};
//console.log(buddy[id]); //Жучка

//buddy[id] = 'Бобик'; 
//console.log(buddy[id]); //Бобик

//Проблемы, кот могут возникнуть без использования Symbol
let buddy = { name: 'Тузик'}; //обхявляем в нашем скрипте свойство id
//buddy.id = 'Наш идентификатор' //...другой скрипт тоже хочет свой идентификатор
//buddy.id = 'Их идентификатор' //Свойство записано сторонней библиотекой
//console.log(buddy.id); //Их идентификатор (id перезаписался). если мы задали идентификатор, есть такое , что сторонняя библиотека может его перезаписать на другой. в этом и опасность

//Как решить?

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон',
    cat: 'Барсик'
}

 console.log(buddies);

 //в чем проблема: при переборе он не видит сивольные ключи. для этого у нас есть специальный  Object.assign - скопирует все свовйства, в том числе и символьные
 let newBuddies = {}; 
 Object.assign(newBuddies, buddies); 

 console.log(newBuddies);

 buddies.cat = 'Барсик';

 console.log(newBuddies);
 console.log(buddies);

 let id = Symbol.for('id'); //читаем символ из глобального реестра и записываем его в переменную. если символа не существует, то он будет создан

 //читаем его снова и записываем в другую переменную (возможно, из другого места кода)

 let idAgain = Symbol.for('id');

 //проверяем: это один и тот же символ?
alert( id === idAgain) //true

let sym = Symbol.for('name');
let sym2 = Symbol.for('id');
console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));


