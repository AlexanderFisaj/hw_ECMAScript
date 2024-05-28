"use strickt";

/* Задача 2:
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ 
с интервалом в 3 секунды. */

const apiDog = "https://dog.ceo/api/breeds/image/random/10";

const getDataNeo = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchDog = await getDataNeo(apiDog);

const dogContentEl = document.querySelector("div.dog-content");

let counter = 0;
const intervalId = setInterval(() => {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", fetchDog.message[counter]);
  imgEl.classList.add("img");
  dogContentEl.appendChild(imgEl);
  counter += 1;
  if (counter === 9) {
    console.log("Done");
    clearInterval(intervalId);
  }
}, 3000);
