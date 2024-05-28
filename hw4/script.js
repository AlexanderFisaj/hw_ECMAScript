"use strickt";

/* Задача 1:
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. */

const urlUsr = "https://jsonplaceholder.typicode.com/users";

const getDataNeo = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = await getDataNeo(urlUsr);

const contentEl = document.querySelector("div.content");

const avatarPic = [
  "https://img.freepik.com/free-photo/portrait-smiling-boy-helmet-sunglasses-3d-rendering_1142-41369.jpg?t=st=1716819154~exp=1716822754~hmac=87f6e979ee28921b5aabe396299b32604e2f708be45f0278ec469cad5097b6bb&w=826",
  "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1716818881~exp=1716822481~hmac=ffbf8cf184baa7318dadd0313b56feec6b57c607087c3e9eefd272fca250dbbb&w=826",
  "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?t=st=1716818474~exp=1716822074~hmac=c13068ecb422be0c4bb9d8786021be4e2adacb8886c4cd58ee2cb51a86f3f940&w=826",
  "https://img.freepik.com/free-photo/portrait-beautiful-businesswoman-wearing-glasses-3d-rendering_1142-54644.jpg?t=st=1716818540~exp=1716822140~hmac=4561d2c258292c5459c6ee86affcc99d068c1ecdcf1ee342abe4c7324c9cb770&w=740",
  "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1716818881~exp=1716822481~hmac=ffbf8cf184baa7318dadd0313b56feec6b57c607087c3e9eefd272fca250dbbb&w=826",
  "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1716818881~exp=1716822481~hmac=ffbf8cf184baa7318dadd0313b56feec6b57c607087c3e9eefd272fca250dbbb&w=826",
  "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1716818881~exp=1716822481~hmac=ffbf8cf184baa7318dadd0313b56feec6b57c607087c3e9eefd272fca250dbbb&w=826",
  "https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1716818881~exp=1716822481~hmac=ffbf8cf184baa7318dadd0313b56feec6b57c607087c3e9eefd272fca250dbbb&w=826",
  "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034097.jpg?t=st=1716818974~exp=1716822574~hmac=b4d7e812cb168527feac7755a268ed4cb362a404949f14c99bb4e29667ea702f&w=826",
  "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034097.jpg?t=st=1716818974~exp=1716822574~hmac=b4d7e812cb168527feac7755a268ed4cb362a404949f14c99bb4e29667ea702f&w=826",
];
let count = 0;
fetchData.forEach((element) => {
  element.avatar = avatarPic[count];
  count++;
});
count = 0;

fetchData.forEach((element) => {
  contentEl.insertAdjacentHTML(
    "beforeend",
    `    
              <div class="infocardContainer">
                <div id="main">
                  <img src="${element.avatar}"></img>
                </div>
                <div id="textbois">
                  <h2>${element.name}</h2>
                  <h4>${element.address.city}</h4>
                  <a href="${element.email}">${element.email}</a>
                  <div id="hotlinks">
                    
                    <a href="#">
                      <img id="${element.id} "src="https://trk7.ru/upload/iblock/814/814c0b5b301965981454fc99dca19fa5.png" target="_blank" title="Удалить"></img>
                    </a>
                  </div>
                </div>
              </div>
                `
  );
  count++;
});

const delBtn = document.querySelectorAll("[title='Удалить']");

contentEl.addEventListener("click", (e) => {
  const findEl =
    e.target.parentElement.parentElement.parentElement.parentElement;
  if (
    findEl !== null &&
    findEl.tagName !== "BODY" &&
    findEl.tagName !== "HTML"
  ) {
    findEl.remove();
  }
});
