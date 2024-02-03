'use strict';

// console.log(window);

// const newWindow = window.open('https://www.example.com', '_blank'); //Открывает новое окно браузера

// window.close(); //закрывает текущее окно

// window.resizeTo(800, 600); //изменяет размер окна на 800*600 пикселей

// window.location.href = 'https://www.example.com'; //перенаправляет на другую страницу

// const windowWidth = window.innerWidth; //получает ширину окна

//-----Работа с window.window------

// const isWindowOpen = window.window.open('https://www.example.com') !== null //проверяет, открыто ли окно

// const windowHeight = window.window.innerHeight; //получает высоту окна

// window.window.location.href = 'https://www.example.com'; //перенаправляет на другую страницу во вложенном окне

//-----Работа с self------

//self работает идентично window

// const newWindowSelf = self.open('https://www.example.com'); //открывает новое окно браузера с помощью self

// self.close(); //закрывает текущее окно с использованием self

// self.resizeTo(800, 600); //изменяет размер окна на 800*600 пикселей с использованием self

// self.location.href = 'https://www.example.com'; //перенаправляет на другую страницу с использованием self



//-----Работа с frames------крайне редко

// const frame = frames[0]; //получает ссылку на фрейм по индексу
// frames[0].location.href = 'https://www.example.com'; //перенаправляет на другую страницу во фрейме
// const frameCount = frames.length; //получает количество фреймов на странице

// const parentWindow = window.parent; //получает доступ к родительскому окну из фрейма


//-----Работа с globalThis------крайне редко

// const globalObject = globalThis; //получает глобальный объект
// globalThis.newVariable = 'Hello, world'; //Определяет новую глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; //получает доступ к глобальным переменным из разных сред исполнения


//----var------

// var glob = 5;

// function increment(val) {
//     return val+1;
// }
// console.log(window.glob); 5//5
// console.log(window.increment);
// ƒ increment(val) {
//     return val+1;
// }


//----alert------
// console.log(alert() === window.alert()); //true , те это одно и тоже

// alert('Можно так');
// window.alert('А можно так');

//----const let------

// const local = 5;
// let localFunc = () => 'localFunc';
// console.log(local); //5
// console.log(localFunc()); //undefined
// console.log(window.localFunc);//undefined


//----Из прошлой части------
console.log(window.Symbol.for); //ƒ for() { [native code] }
console.log(window.Symbol.iterator); //Symbol(Symbol.iterator)
console.log(window.Array.from); //ƒ from() { [native code] }

