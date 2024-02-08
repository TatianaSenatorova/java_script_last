'use strict'; 

//Напишите функцию calculateSum (a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел. Мы хотим проверить, then без catch. Если передать строку вместо числа, просто текс приплюсовывает. То есть надо прописывать catch

let calculateSum = (a, b) =>{
    return new Promise((resolve, reject) =>{
        const sum = a + b;
        resolve(sum);
    });
};

calculateSum(3, 7)
.then((result)=>{
    console.log('Сумма чисел: ', result);
});