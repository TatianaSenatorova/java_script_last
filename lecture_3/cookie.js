'use strict';
//напишите функцию setCookie = (name, value, days), которая устанавливает cookie с указанным импенем, значением, сроком действия в днях

let setCookie = (name, value, days) =>{
    let expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + days);

let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
//document.cookie - самое важное, что нужно для создания cookie
document.cookie = name + '=' + cookieValue;

};

setCookie('username', 'John Doe', 7);
setCookie('userinfo2', 'Mister', 5);
setCookie('userinfo', 'Mister2', 55);

//Напишите функцию getCookie(name), которая возвращает значение cookie с указанным именем

let getCookie = (name) =>{
    let cookies = document.cookie.split(';');

    for (let cookie of cookies) {
    let [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
        return decodeURIComponent(cookieValue);
    }
        
    }
    return null;
};



let username = getCookie('username');
console.log(username);

//Напишите функцию удаления cookie
let deleteCookie = (name) =>{
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
deleteCookie('userinfo2');

