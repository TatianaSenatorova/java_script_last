"use strict";

//https://learn.javascript.ru/private-protected-properties-methods

//Свойствам-аксессорами называются методы внутри объекта, кот. используются для присвоения значения св-ву объекта и для получения его значения: сеттер (для присвоения), геттер (для получения).

//Защищённые свойства обычно начинаются с префикса _.

// class AutoMobile {
//   _horsePowers = 0; //объявление защищенного  свойства _horsePowers со значением 0
//   set horsePowers(value) {
//     //Определение сеттера для свойства horsePower
//     if (value < 0) throw new Error("Отрицательное количество сил"); //Проверка, что значение больше или равно 0, иначе выбрасывает исключение
//     this._horsePowers = value; //Установка значения свойства  _horsePowers
//   }
//   get horsePowers() {
//     //Определение геттера для свойства _horsePowers
//     return this._horsePowers;
//   }
//   constructor(power) {
//     //Определение конструктора класса
//     this._horsePowers = power; //Установка значения свойства _horsePowers при создании объекта класса
//   }
// }
// //создаем новую машину

// let auto = new AutoMobile(100); //создание нового объекта класса AutoMobile и передача значения 100 в конструктор

// //устанавливаем количество сил
// auto.horsePowers = -10;//Установка значения -10 вызывает исключение "Отрицательное количество сил". Благодаря защищенному полю  _  значение контролируется

//-----------приватные поля-----------

class AutoMobile {
    #horsePowers = 0; 
    set horsePowers(value) {
     
      if (value < 0) throw new Error("Отрицательное количество сил"); 
      this.#horsePowers = value; 
    }
    get horsePowers() {
     
      return this.#horsePowers;
    }
    constructor(power) {
  
      this.#horsePowers = power; 
    }
  }
  //создаем новую машину
  
  let auto = new AutoMobile(100); //создание нового объекта класса AutoMobile и передача значения 100 в конструктор
  
  //устанавливаем количество сил
  auto.horsePowers = 50;
  console.log(auto.horsePowers);
  auto.#horsePower = 10; //Uncaught SyntaxError: Private field '#horsePower' must be declared in an enclosing class

  /// Приватные свойства и методы должны начинаться с #. Мы не можем получить к нему доступ извне или из наследуемых классов. Свойство недоступно вне класса бези использования свойств - аксессоров.
  
  //Защищенные свойства начинаются с _.защищённые поля  наследуются. Свойство защищено от изменений вне класса.

  //В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция.