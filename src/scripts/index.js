import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./components/navbar";
import "./components/item-card";

console.log("Hello Coders! :)");

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", (event) => {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", () => {
  drawer.classList.remove("open");
});

main.addEventListener("click", () => {
  drawer.classList.remove("open");
});

fetch("data/DATA.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let datas = data["restaurants"];
    let Listdata = "";
    datas.forEach(function (data) {
      Listdata += `
        <div class="list_item">
            <img class="list_item_thumb" src="${data["pictureId"]}" alt="${
        data["name"]
      }" title="${data["name"]}">
            <div class="city">${data["city"]}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : &#11088
                    <span class="list_item_rating_value" tabindex="0">${
                      data["rating"]
                    }</span>
                </p>
                <h1 class="list_item_title" tabindex="0">${data["name"]}</h1>
                <div class="list_item_desc">${data["description"].slice(
                  0,
                  150
                )}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector("#data").innerHTML = Listdata;
  });
