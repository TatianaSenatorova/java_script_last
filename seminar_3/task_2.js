"use strict";

//Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.

//1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
//2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
//3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
//4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
//5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).

//На семинаре
//   <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script> - подключили библиотеку чтобы к куки обращаться Cookies, использовать Cookies.set,  Cookies.remove, Cookies.get

const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const clearBtn = document.querySelector("#clear-btn");
const tableSelectEl = document.querySelector("#table-color");
const chairSelectEl = document.querySelector("#chair-material");

saveBtn.addEventListener("click", saved);
loadBtn.addEventListener("click", loaded);
clearBtn.addEventListener("click", cleared);

function saved(event) {
  Cookies.set("tableConfig", tableSelectEl.value);
  Cookies.set("chairConfig", chairSelectEl.value);
  alert("настройки сохраненны");
}

function loaded(event) {
  if (!Cookies.get("tableConfig")) {
    return alert("печенек нет");
  }
  tableSelectEl.value = Cookies.get("tableConfig");
  chairSelectEl.value = Cookies.get("chairConfig");
  alert("настройки загружены");
}

function cleared(event) {
  Cookies.remove("tableConfig");
  Cookies.remove("chairConfig");
  alert("Съели все печеньки)");
}
document.addEventListener("DOMContentLoaded", loaded);

//Мой вариант

// const buttonSaveEl = document.querySelector("#save-btn");
// const buttonLoadEl = document.querySelector("#load-btn");
// const buttonClearEl = document.querySelector("#clear-btn");
// const tableColorSelectEl = document.querySelector("#table-color");
// const chairMaterialEl = document.querySelector("#chair-material");

// const cookieData = [];

// window.addEventListener("load", () => {
//   getCookie();
//   fillSelectsFromCookieData();
// });

// buttonSaveEl.addEventListener("click", () => {
//   deleteCookie();
//   setCookie();
// });

// buttonLoadEl.addEventListener("click", () => {
//   getCookie();
//   fillSelectsFromCookieData(cookieData);
// });

// buttonClearEl.addEventListener('click', deleteCookie);

// function getCookie() {
//   if (document.cookie) {
//     const cookies = document.cookie.split(";");
//     for (const cookie of cookies) {
//       const [cookieName, cookieValue] = cookie.trim().split("=");
//       cookieData.push({ cookieName, cookieValue });
//     }
//     return cookieData;
//   }
// }

// function fillSelectsFromCookieData() {
//   for (let i = 0; i < cookieData.length; i++) {
//     const selectName = document.getElementById(cookieData[i].cookieName);
//     selectName.value = cookieData[i].cookieValue;
//   }
// }

// function deleteCookie() {
//   console.log("123");
//   document.cookie.split(";").forEach(function (c) {
//     document.cookie =
//       c.trim().split("=")[0] + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//   });
// }

// function setCookie() {
//   let expirationDate = new Date();
//   expirationDate.setDate(expirationDate.getDate() + 365);

//   let tableName = tableColorSelectEl.id;
//   const tableValue = tableColorSelectEl.value;

//   let chairName = chairMaterialEl.id;
//   const chairValue = chairMaterialEl.value;

//   let date = new Date();
//   date.setYear(date.getFullYear() + 1);
//   date = date.toUTCString();

//   document.cookie =
//     encodeURIComponent(tableName) +
//     "=" +
//     encodeURIComponent(tableValue) +
//     "=" +
//     date;
//   document.cookie =
//     encodeURIComponent(chairName) +
//     "=" +
//     encodeURIComponent(chairValue) +
//     "=" +
//     date;
// }
