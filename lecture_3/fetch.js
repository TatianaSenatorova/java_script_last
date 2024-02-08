'use strict';

//Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному url. если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке. Это используется для отлавливания таких ошибок, как, например, бэкэндер дал неправильный url

let fetchData = (url) =>{
    return new Promise((resolve, reject) =>{
        //всегда работает по такому принципу, можно просто копировать
        fetch(url)
        .then((response) =>response.json())
        .then((data) => resolve(data))
        .catch((error) =>reject('Ошибка загрузки данных'));
    });
};
//https://api.example.com/data - это ошибочный путь
//https://randombig.cat/roar.json - это верный путь
fetchData('https://dog.ceo/api/breeds/list/all')
.then((data) =>{
    console.log('Получены данные: ', data);
})