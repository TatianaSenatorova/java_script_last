"use strict";

//Установка и получение значения из localStorage
// localStorage.setItem('username', 'John');

// //получение значения из localStorage
// let storeUserName = localStorage.getItem('username');
// console.log('Значение из localStorage: ', storeUserName);

// //Удаление значения из localStorage

// localStorage.removeItem('username');

// //проверка, что значение удалено
// let storeUserName2 = localStorage.getItem('username');
// console.log('Значение из localStorage: ', storeUserName2);

// //очистка localStorage
// localStorage.setItem('username', 'John');
// localStorage.setItem('isLoggIn', 'true');
// localStorage.clear();

// //проверка, что localStorage пустой
// console.log('LocalStorage: ', localStorage);

// //проверяем, есть ли значение счетчика в localStorage
// if(localStorage.getItem('counter')){
//     //если значение счетчика уже есть, увеличиваем его на 1

//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// }else{
//     //если значение счетчика не существует, устанавливаем его 1
//     localStorage.setItem('counter', '1');
// }

// //выводим значение счетчика в консоль
// console.log('Счетчик посещений: ', localStorage.getItem('counter'));
// localStorage.clear();

//проверим, есть ли значение счетчика в localStorage
let counter = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;
  console.log(counter);
//обновляем значение счетчика и сохраняем его в localStorage
const updateCounter = () => {
  counter++;
  console.log(counter);
  localStorage.setItem("counter", counter.toString());
};

//выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

//обработчик события для кнопки "увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () =>{
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});

