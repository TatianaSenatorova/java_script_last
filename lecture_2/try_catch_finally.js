"use strict";

//переменные, объявленные в блоке try не будут видны в catch и finally. поэтому, если нужен обмен данными между ними, лучше объявить их на уровень выше.
//Код в блоке finally выполнится в любом случае, даже если в блоке try был оператор return

try {
  undefined = 1;
} catch {
  console.log("Что-то произошло");
} finally {
  console.log("Отличный результат");
}

//Пример: работа с делением числа

function divideNumbers(a, b) {
  try {
    const result = a / b; //Попытка выполнитеь деление
    if (isNaN(result)) {
      throw new Error("Результат не является числом");
    }
    console.log("Результат деления", result);
  } catch (error) {
    console.log("Ошибка деления", error);
  } finally {
    console.log("Операция деления завершена");
  }
}

divideNumbers(10, 2); //Пример корректного деления
divideNumbers(10, 0); //Пример деления на ноль
divideNumbers(10, "aa"); //Выдает ошибку: Результат не является числом

//Пользовательские ошибки
//Создание пользовательской ошибки

class CustomError extends Error {
  constructor(message) {
    super(message); //вызов конструктора родительского класса (Error) с переданным сообщением
    this.name = "CustomError"; //установка имени ошибки
  }
}
function validateNumber(value) {
  if (typeof value !== "number") {
    throw new CustomError("Значение должно быть числом"); //Выбрасывание пользовательской ошибки с сообщением
  }
  console.log("Валидация успешна");
}

try {
    validateNumber('42'); //проверка на число с передачей строки вместо числа
} catch (error) {
    if(error instanceof CustomError){//проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error("Ошибка: ", error.message); //Вывод сообщения об ошибке
        console.log('Тип ошибки: ', error.name); //вывод имени ошибки

    }else{
        console.error("Произошла ошибка: ", error);//вывод сообщения об ошибке по умолчанию
    }
}
