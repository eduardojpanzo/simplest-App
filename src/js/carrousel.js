const slider = document.querySelector("#slider");
const sliders = [
  {
    url: "https://s32907.pcdn.co/wp-content/uploads/2019/09/escrit%C3%B3rios-pequenos-21.png",
    name: "imagem1",
  },
  {
    url: "https://s32907.pcdn.co/wp-content/uploads/2019/09/Escrit%C3%B3rios-pequenos-1.jpg",
    name: "imagem2",
  },
  {
    url: "https://s32907.pcdn.co/wp-content/uploads/2019/09/escrit%C3%B3rios-pequenos-15.jpg",
    name: "imagem3",
  },
  {
    url: "https://s32907.pcdn.co/wp-content/uploads/2019/09/escrit%C3%B3rios-pequenos-3.jpg",
    name: "imagem4",
  },
];

boot();

let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function moveToRight() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
function moveToLeft() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", moveToRight);
btnLeft.addEventListener("click", moveToLeft);

setInterval(() => {
  moveToRight();
}, 3500);

function boot() {
  slider.innerHTML = "";

  sliders.forEach(({ name, url }) => {
    slider.innerHTML += `
    <div class="slider__section">
      <img
        src=${url}
        alt=${name}
        class="slider__img"
      />
    </div>`;
  });
}
