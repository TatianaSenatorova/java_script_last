"use strict";

//Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
//введенное значение должно содержать от 3 до 10 символов.
//1. Создайте HTML-структуру с текстовым полем, кнопкой и списком.
//2. Напишите функцию, которая будет добавлять элементы в список или
//генерировать исключение, если длина введенного значения не соответствует
//требованиям.

const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".button");
const commentEl = document.querySelector(".comment");
const listEl = document.querySelector(".list");

buttonEl.addEventListener("click", (event) => {
  event.preventDefault();
  commentEl.textContent = "";
  addListItem(inputEl.value);
});

function addListItem(inputValue) {
  console.log(inputValue.length);
  try {
    if (inputValue.length < 3 || inputValue.length > 10) {
      throw new Error(
        "введенное значение должно содержать от 3 до 10 символов"
      );
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = inputValue;
      listEl.append(listItem);
    }
  } catch (error) {
    commentEl.textContent = error.message;
  }finally{
    console.log('мы закончили добавлять объекты');
  }
}
