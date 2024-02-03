"use strict";

//Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

//Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

//Реализуйте геттер allBooks, который возвращает текущий список книг.

//Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

//Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

//Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

//Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class LibraryBooks {
  #books = [];
  constructor(title) {
    if (this.#books.includes(title)) {
      throw new Error("Такая книга есть в библиотеке");
    }
    this.#books.push(title);
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга уже есть в библиотеке");
    }
    this.#books.push(title);
    return this.#books;
  }

  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("Такой книги нет в библиотеке");
    }
    for (let i = 0; i < this.#books.length; i++) {
      if (this.#books[i] === title) {
        this.#books.splice(i, 1);
      }
    }
    return this.#books;
  }

  hasBook(title) {
    if (this.#books.includes(title)) {
      return true;
    } else {
      return false;
    }
  }
}

let books = new LibraryBooks('phisics');
console.log(books.addBook("story"));
console.log(books.addBook("history"));
console.log(books.addBook("fairy tale"));
console.log(books.hasBook("fairy tale"));
console.log(books.removeBook("fairy tale"));
console.log(books.allBooks);
