// Navigation

const nav = document.querySelector(".header__wrapper");
const burger = nav.querySelector(".header__burger");

function burgerClickHandler() {
  nav.classList.toggle("header__wrapper--opened");
}

burger.addEventListener("click", burgerClickHandler);

// Focus

$(document).ready(function () {
  $(".works__buttons button, .works__buttons a").on("focus", function (e) {
    $(this).parents(".works__item").addClass("works__item--active");
  });

  $(".works__buttons button, .works__buttons a").on("blur", function (e) {
    $(this).parents(".works__item").removeClass("works__item--active");
  });
});
