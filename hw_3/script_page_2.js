"use strict";

//Страница просмотра отзывов:

//Показывает список всех продуктов, о которых были оставлены отзывы.
//При клике на название продукта отображается список всех отзывов по этому продукту.
//Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const feedbacksList = document.querySelector(".feedbacks__list");

document.addEventListener("DOMContentLoaded", getLocalStorageData);

feedbacksList.addEventListener("click", (event) => {
  if (event.target.classList.contains("button-delete")) {
    deleteFeedback(event.target);
  }
  if (event.target.classList.contains("feedbacks__item-title")) {
    getAllFeedbacksAboutProduct(event.target);
  }
});

function getLocalStorageData() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    const feedbacksItem = document.createElement("li");
    feedbacksItem.classList.add("feedbacks__item");
    feedbacksItem.insertAdjacentHTML(
      "afterbegin",
      `
     <h5 class="feedbacks__item-title" data-product=${key}>Название товара: ${key}</h5> `
    );
    feedbacksList.insertAdjacentElement("beforeend", feedbacksItem);
  }
}

function getAllFeedbacksAboutProduct(product) {
  const feedbacksItem = product.closest(".feedbacks__item");

  //это действие, если пользователь второй раз нажал на название товара - чтобы повторно не отразились отзывы
  if (
    product.closest(".feedbacks__item").querySelectorAll(".feedbacks__text")
  ) {
    product
      .closest(".feedbacks__item")
      .querySelectorAll(".feedbacks__text")
      .forEach((element) => {
        element.remove();
      });
  }
  const productName = product
    .closest(".feedbacks__item")
    .querySelector("[data-product]")
    .getAttribute("data-product");
  const productFeedbacks = localStorage.getItem(productName);

  if (!productFeedbacks.includes("|||")) {
    feedbacksItem.insertAdjacentHTML(
      "beforeend",
      `
                          <div class="feedbacks__text">Отзыв: ${localStorage.getItem(
                            productName
                          )}<button class="button-delete">Удалить отзыв</button></div>
  
                  `
    );
  } else {
    const arrayOfFeedbacks = productFeedbacks.split("|||");

    for (let i = 0; i < arrayOfFeedbacks.length; i++) {
      feedbacksItem.insertAdjacentHTML(
        "beforeend",
        `
                              <div class="feedbacks__text">Отзыв: ${arrayOfFeedbacks[i]}<button class="button-delete">Удалить отзыв</button></div>
  
                      `
      );
    }
  }
}

function deleteFeedback(deleteButton) {
  const productNameToRemoveFeedback = deleteButton
    .closest(".feedbacks__item")
    .querySelector("[data-product]")
    .getAttribute("data-product");
  //Определим, какой по счету именно отзыв надо убрать. так как отзывы бывают одинаковые по содержанию. Чтобы понять, какой именно из строки localStorage удалить
  const arrayFeedbacksThisItem = Array.from(
    deleteButton.closest(".feedbacks__item").querySelectorAll(".button-delete")
  );

  if (arrayFeedbacksThisItem.length === 1) {
    localStorage.removeItem(productNameToRemoveFeedback);
    deleteButton.closest(".feedbacks__item").remove();
  } else {
    const indexToRemove = arrayFeedbacksThisItem.indexOf(deleteButton);
    //изменяем значение по ключу в хранилище
    const arrayOfFeedbacks = localStorage
      .getItem(productNameToRemoveFeedback)
      .split("|||");
    arrayOfFeedbacks.splice(indexToRemove, 1);
    localStorage.setItem(
      productNameToRemoveFeedback,
      arrayOfFeedbacks.join("|||")
    );

    deleteButton
      .closest(".feedbacks__item")
      .querySelector(".feedbacks__text")
      .remove();
  }

  let keys = Object.keys(localStorage);
  for (const key in keys) {
    if (key === null || key === "") {
      localStorage.clear();
    }
  }
}
