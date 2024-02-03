"use strict";

let map = new Map();
map.set("1", "str1"); //строка в качестве ключа
map.set(1, "num1"); //цифра как ключ
map.set(true, "bool1"); //булево значение как ключ

console.log(map);

//обычный объект Object приводит ключи к строке. Map сохраняет типы ключей.

console.log(map.get(1)); //'num1'
console.log(map.get("1")); //'str1'
console.log(map.size); //3

//get set

let map1 = new Map();
map1.set("1", "we").set(1, "like").set(true, "JS");

console.log(map1);

//перебор коллекции

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50]
]);
console.log(recipeMap);
//перебор по ключамм (овощи)

for (let vegatable of recipeMap.keys()) {
    console.log(vegatable);
}
// огурец, помидор, лук

//перебор по значениям

for (let amount of recipeMap.values()){
    console.log(amount);
}
//500, 350, 50

//перебор по элементам во формате [ключ, значение]
for(let entry of recipeMap){
    console.log(entry);
}
// ['огурец', 500]['помидор', 350] ['лук', 50]

//выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) =>{
    console.log(`${key}: ${value}`);
})
//огурец: 500 помидор: 350 лук: 50

//-------Работа с объектами-------
//Object.entries поможет создать Map
//let map3 = new Map(Object.entries(obj));

//Object.fromEntries поможет создать объект из Map
//let obj = Object.fromEntries(map3);



//-------Set---------

let buddies = [
    'Жучка', 
    'Тузик', 
    'Булька', 
    'Тузик', 
    'Бобик', 
    'Жучка',
    'Валера', 
    'Жучка',
    'Тузик', 
    'Манька'
]; 

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies); //только уник данные вывел, т.е. 6 собак/ здесь коллекция

//перевести обратно в массив нам поможет Array.from

let arr = Array.from(uniqueBuddies);// здесь массив
//Итак: с помощью коллекции убрали дубликаты и перегнали данные обратно в массив
