'use strict';

//Текст задания:
//Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
//Map будет использоваться для хранения соответствия между уроком и преподавателем.
//Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
// 1. Map: урок => преподаватель
//let lessons = new Map();
// "Математика", "Смирнов"
// "История", "Иванова"


// 2. Map: студент => Set уроков


// Проверка:
//console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
//console.log(`Уроки Ивана: тут вывод уроков ивана`); // Математика, История

let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");


const Kuznetsov ={
    name: "Иван"
};

const Petrov ={
    name: "Петр"
};

const lessonsKuznetsov = new Set();
lessonsKuznetsov.add('Математика');
lessonsKuznetsov.add('История');

const lessonsPetrov = new Set();
lessonsPetrov.add('Черчение');
lessonsPetrov.add('Информатика');

let students = new Map();
students.set(Petrov, lessonsPetrov);
students.set(Kuznetsov, lessonsKuznetsov);

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки ${Kuznetsov.name}: ${[...students.get(Kuznetsov)]}`); // Математика, История

console.log(`Уроки ${Petrov.name}: ${[...students.get(Petrov)]}`); // Математика, История