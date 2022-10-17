window.addEventListener("load", function () {
  var splide = document.createElement("script");
  splide.src = "/js/splide.min.js";
  splide.onload = function () {
    /*var steps = new Splide(".aboutpage-company__steps", {
      perPage: 7,
      arrows: false,
      pagination: false,
      mediaQuery: "min",
      isNavigation: true,
    });*/

    var company = new Splide(".aboutpage-company__slider", {
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
    });

    var bar = document.querySelector(".aboutpage-company__progress-bar");
    var dots = document.querySelectorAll(".aboutpage-company__progress-dot");

    company.on("mounted move", function () {
      var end = company.Components.Controller.getEnd();
      var rate = Math.min(company.index / end, 1);
      bar.style.width = String(100 * rate) + "%";

      if (
        document.querySelector(".aboutpage-company__progress-dot.is-active")
      ) {
        document
          .querySelector(".aboutpage-company__progress-dot.is-active")
          .classList.remove("is-active");
      }

      dots[company.index].classList.add("is-active");
    });

    //company.sync(steps);

    company.mount();
    //steps.mount();

    new Splide(".aboutpage-staff__slider", {
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
      breakpoints: {
        481: {
          perPage: 2,
        },
        641: {
          perPage: 3,
        },
        1025: {
          perPage: 4,
          gap: 30,
        },
      },
    }).mount();

    new Splide(".homepage-brands__items", {
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
      breakpoints: {
        831: {
          pagination: true,
        },
      },
    }).mount();

    new Splide(".gallery-block", {
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
      breakpoints: {
        577: {
          perPage: 2,
        },
        1025: {
          perPage: 3,
          gap: 70,
        },
      },
    }).mount();

    new Splide(".certificates-block", {
      perPage: 2,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
      breakpoints: {
        481: {
          perPage: 3,
        },
        641: {
          perPage: 4,
        },
        1025: {
          perPage: 6,
        },
      },
    }).mount();
  };
  document.body.appendChild(splide);
});
