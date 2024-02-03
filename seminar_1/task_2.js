"use strict";

//Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
//Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
//Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
//Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
//Массив книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];
const library = {
  //распарсит массив books и загонит его значения в значение свойства books
  books: [...books],
  [Symbol.iterator]: function () {

    //почему next и done и Symbol.iterator  - для перебора массивов с уникальными id, хотя здесь в задаче id не уникальные
    let countBooks = 0;
    return {
        //next дает команду продолжить делать то же самое. Когда шли в цикл и закончилась первая итерация, next дает команду продолжить делать то же самое. По факту это небольшой цикл какой-то
      next: () => {
        if (countBooks >= this.books.length) {
            // по сути done - это флаг, входить или не входить 
          return { done: true };
        }
        else{
            return{value: this.books[countBooks++], done: false}
        }
      },
    };
  },
};
for (const book of library) {
 console.log(book.title, book.author);
};
console.log(books);
console.log(library);

