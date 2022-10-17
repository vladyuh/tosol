window.addEventListener("load", function () {
  var splide = document.createElement("script");
  splide.src = "/js/splide.min.js";
  splide.onload = function () {
    var splide = new Splide(".provider-steps__slider", {
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
    });

    var bar = document.querySelector(".provider-steps__progress-bar");
    var current = document.querySelector(".provider-steps__count-current");
    var all = document.querySelector(".provider-steps__count-all");

    var dots = document.querySelectorAll(".provider-steps__progress-dot");

    splide.on("mounted move", function () {
      var end = splide.Components.Controller.getEnd();
      var rate = Math.min(splide.index / end, 1);
      bar.style.width = String(100 * rate) + "%";
      current.innerHTML = splide.index + 1;
      all.innerHTML = "из " + splide.length;

      if (document.querySelector(".provider-steps__progress-dot.is-active")) {
        document
          .querySelector(".provider-steps__progress-dot.is-active")
          .classList.remove("is-active");
      }

      dots[splide.index].classList.add("is-active");
    });

    splide.mount();
  };
  document.body.appendChild(splide);
});
