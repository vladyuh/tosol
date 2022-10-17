window.addEventListener("load", function () {
  var toggles = this.document.querySelectorAll(".contacts-block__toggle");
  toggles.forEach(function (el) {
    el.addEventListener("click", function () {
      var id = el.getAttribute("data-tab");
      document
        .querySelector(".contacts-block__toggle.is-active")
        .classList.remove("is-active");
      document
        .querySelector(".contacts-block__tab.is-active")
        .classList.remove("is-active");
      el.classList.add("is-active");
      document
        .querySelector(".contacts-block__tab[data-tab='" + id + "']")
        .classList.add("is-active");
    });
  });
});
