"use strict";

//напишите функцию checkIfFileExists (file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 сек. Promise должен резолвиться, если файл существует и отклониться, если файла нет
// let checkIfFileExists = (file) => {};


let checkIfFileExists = (file) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fileExists = checkIfFileExists(file);
      if (fileExists) {
        resolve("Файл существует");
      } else {
        reject("Файл не существует");
      }
    }, 2000);
  });
};

checkIfFileExists("./fetch1.js")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Ошибка: ", error);
  });
