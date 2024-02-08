"use strict";

//Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
//систему, используя данные, сохраненные в LocalStorage.
//Приложение будет состоять из трёх основных страниц:
//1. Страница регистрации:
//○ Предлагает пользователю ввести логин и пароль.
//○ После ввода данных, они сохраняются в LocalStorage.
//○ Пользователь перенаправляется на страницу входа.
//2. Страница входа:
//○ Предлагает пользователю ввести логин и пароль.
//○ Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется
//на страницу приветствия.
//○ Если данные не совпадают, выводится сообщение об ошибке.
//3. Страница приветствия:
//○ Простое приветственное сообщение для авторизованного пользователя.
//○ Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.

const registerBtnEl = document.querySelector(".register-btn");
const userNameEl = document.querySelector(".username-input");
const passwordInputEl = document.querySelector(".password-input");

registerBtnEl.addEventListener("click", addUserToLocalStorage);

function addUserToLocalStorage() {
  localStorage.setItem('userName', userNameEl.value);
  localStorage.setItem('password', passwordInputEl.value);
  window.location.href = "./index_task_4_page2.html";
}


