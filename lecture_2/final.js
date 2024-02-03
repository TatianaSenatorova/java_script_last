'use strict';
//система регистрации пользователей для web приложений

//глобальный объект
const App = {};

//защищенные свойства класса

class User{
    //защищенное свойство _name
    #_name;

  constructor(name){
    this.#_name = name;
  }
    getName(){
        return this.#_name;
    }
  }


//Функция регистрации пользователя
App.registerUser = (name, email, password) =>{
  try{
    //проверка введенных данных
    if(!name || !email || !password){
        throw new Error('Не все данные были введены');
    }
    //создание экземпляра класса User
const user = new User(name);
//дополнительная обработка и сохранение пользователя
const userData = {
    name: user.getName(),
    email,
    password
};
//здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер
console.log('Пользователь успешно зарегистрирован: ', user.getName());
console.log("Дополнительные данные пользователя: ", userData);

  }catch{
    console.error("Ошибка регистрации", error.message);
  }finally{
    console.log('Завершение регистрации пользователя');
  }
};

App.registerUser('John Doe', 'john@example.com', 'password123');
App.registerUser('Jane Smith', "", 'password569');
