function topFunction() {
  document.documentElement.scrollTop = 0;
}

window.addEventListener("load", function () {
  document
    .querySelector(".email-contact")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
});
