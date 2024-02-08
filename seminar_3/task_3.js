"use strict";

//1. Решить предыдущую задачу, только вместо куки использовать localstorage
const buttonSaveEl = document.querySelector("#save-btn");
const buttonLoadEl = document.querySelector("#load-btn");
const buttonClearEl = document.querySelector("#clear-btn");
const tableColorSelectEl = document.querySelector("#table-color");
const chairMaterialEl = document.querySelector("#chair-material");

let localStorageData = [];

document.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.length === 0) {
    return;
  } else fillSelectsFromLocalStorage();
});

buttonSaveEl.addEventListener("click", () => {
  deleteDataFromLocalStorage();
  setLocalStorage();
});

buttonLoadEl.addEventListener("click", () => {
  fillSelectsFromLocalStorage();
});

buttonClearEl.addEventListener("click", deleteDataFromLocalStorage);

function fillSelectsFromLocalStorage() {
  if (!localStorage) {
    return;
  } else {
    tableColorSelectEl.value = localStorage.getItem(tableColorSelectEl.id);
    chairMaterialEl.value = localStorage.getItem(chairMaterialEl.id);
  }
}

function deleteDataFromLocalStorage() {
  localStorage.clear();
}

function setLocalStorage() {
  localStorage.setItem(tableColorSelectEl.id, tableColorSelectEl.value);
  localStorage.setItem(chairMaterialEl.id, chairMaterialEl.value);
}
