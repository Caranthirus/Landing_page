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

// Progress

function  moveProgressBar(node, nodeLine, tooltip, animationLength = 2000) {
  const progressElement = $(node);
  progressElement.each(function (value, item) {
    $(item).find(nodeLine).animate({
      width: item.dataset.progressPercent+"%"
    }, animationLength);
    $(item).find(tooltip).show(animationLength);
  });
}

let animate = true;

$(window).scroll(function () {

  if($(".skills").offset().top <= $(window).scrollTop() + 150) {
    if(animate) {
      moveProgressBar(".progress__element", ".progress__line", ".progress__tooltip");
    }
    animate = false;
  }
});
