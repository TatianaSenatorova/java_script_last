"use strict";

//У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
//некоторые – нет.
//Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
//наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
//и instanceof.
//1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
//2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
//PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
//действия), а у RegularUser такого свойства нет.
//3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
//возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
//Опциональную цепочку вызовов методов и оператор нулевого слияния.
//4. В функции getAccountInfo используйте instanceof для проверки типа переданного
//пользователя и дайте соответствующий ответ.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class PremiumUser extends User {
  constructor(name, surname, premiumAccount) {
    super(name, surname);
    this.premiumAccount = premiumAccount;
  }
}
class RegularUser extends User {
  constructor(name, surname) {
    super(name, surname);
  }
}

function getAccountInfo(user) {
  if (!(user instanceof User)) {
    return "unknown user";
  }
  if (user instanceof PremiumUser) {
    return user.premiumAccount;
  } else if (user instanceof RegularUser) {
    return "this user is regular";
  }
  return "ordinary user";
}

const user1 = new User("Ivan", "Ivanov");
const user2 = new RegularUser("serg", "serg");
const user3 = new PremiumUser("andrey", "andreev", "05.05.2025");
const user4 = 123;

console.log(getAccountInfo(user1));
console.log(getAccountInfo(user2));
console.log(getAccountInfo(user3));
console.log(getAccountInfo(user4));
