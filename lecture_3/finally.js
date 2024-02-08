'use strict';

//finally

let processData = (data) =>{
    //implement your logic to process the data
    //return the processed result
};
let performOperation = (data) =>{
    return new Promise ((resolve, reject) =>{
        //perform the operation with the data
        let result = processData(data);

        //complete the promise
        if (result) {
            resolve(result);
        } else {
            reject('Ошибка операции');
        }
    }).finally(() =>{

        //finally применяется, допустим, до сообщения пользователю - первая загрузка завершена, вторая загрузка завершена и т.п.
        console.log('Операция завершена');
    });
};

performOperation('example')
.then((result) =>{
    console.log('Результат операции: ', result);
})
.catch((error) =>{
    console.log('Ошибка: ', error);
})