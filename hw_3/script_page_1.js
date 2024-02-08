"use strict";

//Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

//Страница добавления отзыва:

//Поле для ввода названия продукта.
//Текстовое поле для самого отзыва.
//Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

//Страница просмотра отзывов:

//Показывает список всех продуктов, о которых были оставлены отзывы.
//При клике на название продукта отображается список всех отзывов по этому продукту.
//Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const buttonAddEl = document.querySelector(".button-add");
const productNameEl = document.querySelector(".input-product");
const feedbackProductEl = document.querySelector(".input-feedback");
const buttonFeedbacksEl = document.querySelector(".button-feedbacks");

buttonAddEl.addEventListener("click", addFeedbackToLocalStorage);

function addFeedbackToLocalStorage() {
  if (localStorage.length === 0) {
    localStorage.setItem(productNameEl.value, feedbackProductEl.value);
  } else if (!localStorage.getItem(productNameEl.value)) {
    localStorage.setItem(productNameEl.value, feedbackProductEl.value);
  } else {
    localStorage.setItem(
      productNameEl.value,
      localStorage.getItem(productNameEl.value) +
        "|||" +
        feedbackProductEl.value
    );
  }
}

buttonFeedbacksEl.addEventListener("click", () => {
  window.location.href = "./index_all_feedbacks.html";
});
