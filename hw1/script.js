"use strict";

// Домашнее задание

/* 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки */

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

function createCounter(counter = 0) {
  return {
    value: counter,
    increment() {
      return this.value++;
    },
    decrement() {
      return this.value--;
    },
    prtCounter() {
      return this.value;
    },
  };
}

/* 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

function findElementByClass(rootEl, className) {
  if (rootEl.classList && rootEl.classList.contains(className)) {
    return rootEl;
  }
  for (let i = 0; i < rootEl.children.length; i++) {
    const foundEl = findElementByClass(rootEl.children[i], className);
    if (foundEl) {
      return foundEl;
    }
  }
  return null;
}

const rootElement = document.querySelector("div.container");
const targetElement = findElementByClass(rootElement, "nav-link");

if (targetElement) {
  console.log("Найденный элемент:", targetElement);
} else {
  console.log("Элемент с указанным классом не найден.");
}
