"use strict";

//Вы создаете интерфейс, где пользователь вводит число.
//Ваша задача — проверить, является ли введенное значение числом или нет, и дать
//соответствующий ответ.
//1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
//"Проверить".
//2. Добавьте место (например, div) для вывода сообщения пользователю.
//3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
//должна использовать try и catch для проверки вводимого значения.

const buttonEl = document.querySelector(".button");
const checkResultEl = document.querySelector(".check");
console.log(buttonEl);

buttonEl.addEventListener("click", (event) => {
  event.preventDefault();
  const inputElValue = document.querySelector(".input").value;
  console.log(inputElValue);
  checkInput(inputElValue);
});

function checkInput(inputElValue) {
  try {
    if (Number(inputElValue)) {
      const num = +inputElValue;
      console.log(num);
      const messageResult = document.createElement("p");
      messageResult.textContent = "Вы ввели число";
      checkResultEl.append(messageResult);
    } else{
        throw new Error;
    }
  } catch (error) {
    const messageResult = document.createElement("p");
    messageResult.textContent = "Вы ввели НЕ число";
    checkResultEl.append(messageResult);
  }
}
