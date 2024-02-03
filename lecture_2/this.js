'use strict';

//внутри объекта

const obj = {
    regularMethod: function(){
        console.log(this);
    },
    arrowMethod: () =>{
        console.log(this);
    }
};

obj.regularMethod(); //выводит объект obj , так как метод вызывается на объекте obj {regularMethod: ƒ, arrowMethod: ƒ} то есть получаем ссылку на сам объект
obj.arrowMethod(); //выводит контекст выполнения, в кот была создана стрелочная функция (например, объект Window) Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//Вывод: внутри объекта стрелочные и обычные функции ведут себя по-разному. поэтому внутри объектов стрелочные не встречаются

//а вот в таких ситуациях стрелочные функции очень популярны
const result = (a, b) => a + b;
arr.filter(item => item > 3);