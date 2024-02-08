"use strict";

const userNameEl = document.querySelector(".username-input");
const passwordInputEl = document.querySelector(".password-input");
const loginBtnEl = document.querySelector(".login-btn");

loginBtnEl.addEventListener("click", checkUserLogin);

function checkUserLogin() {
  try {
    if (
      userNameEl.value == localStorage.getItem("userName") &&
      passwordInputEl.value == localStorage.getItem("password")
    ) {
      window.location.href = "./index_task_4_page3.html";
    } else {
      throw new Error("нет такого пользователя");
    }
  } catch (error) {
    console.log(error.message);
  }
}
