function myFunction(x) {
    x.classList.toggle("change");
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector(".page-navigation").classList.toggle("nav-opened");
}, false);
