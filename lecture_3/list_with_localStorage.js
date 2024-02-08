'use strict';

//получаем ссылки на элементы страницы
const inputField = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');

//получаем сохраненный список покупок из localStorage(если есть)

let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

//функция для обновления списка покупок на странице и сохранения его в localStorage
const updateShoppingList = () =>{
    //очищаем список покупок на странице
    itemList.innerHTML = '';
    //создаем новые элементы списка для каждого пункта
    shoppingList.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item
        itemList.append(listItem);
    });
//сохраняем обновленный список в localStorage
localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
};

//обработчик для кнопки добавить
addButton.addEventListener('click', () =>{
    const newItem = inputField.value.trim();
    //The trim method in JavaScript is a built-in string method that removes whitespace characters from the beginning and end of a string

    if(newItem !== ''){
        //добавляем новый пунк в список покупок
        shoppingList.push(newItem);
        //после добавления пункта, инпут обнуляется
        inputField.value = '';
        updateShoppingList();
    }
});

//обновляем список покупок при загрузке страницы
updateShoppingList();

