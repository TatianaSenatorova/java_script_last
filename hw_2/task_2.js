"use strict";

//Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

//Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

//Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

//При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const userEl = document.querySelector(".form__input");
const userCommentEl = document.querySelector(".form__input_comment");
const buttonEl = document.querySelector(".form__button");
const feedbacksBoxEl = document.querySelector(".feedbacks");
const commentErrorEl = document.querySelector(".form__comment");

console.log(userEl, userCommentEl, buttonEl, feedbacksBoxEl, commentErrorEl);

buttonEl.addEventListener("click", (event) => {
  event.preventDefault();
  commentErrorEl.textContent = "";
  addFeedbacks();
});

function addFeedbacks() {
  try {
    if (userCommentEl.value.length < 50 || userCommentEl.value.length > 500) {
      throw new Error(
        "Длина комментария должна быть больше 50 символов и меньше 500 символов"
      );
    } else {
      const addComment = document.createElement("div");
      addComment.classList.add('feedbacks__item');
      addComment.textContent = `${userEl.value} :  ${userCommentEl.value}`;
      feedbacksBoxEl.insertAdjacentElement("beforeend", addComment);
    }
  } catch (error) {
    commentErrorEl.textContent = error.message;
  }
}
