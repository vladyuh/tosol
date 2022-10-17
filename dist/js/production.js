window.addEventListener("load", function () {
  var splide = document.createElement("script");
  splide.src = "/js/splide.min.js";
  splide.onload = function () {
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

    var trust = new Splide(".trust-block", {
      perPage: 2,
      arrows: true,
      pagination: false,
      mediaQuery: "min",
      gap: 16,
      breakpoints: {
        577: {
          perPage: 3,
        },
        831: {
          perPage: 4,
        },
        1025: {
          perPage: 5,
        },
        1153: {
          perPage: 6,
        },
      },
    });

    trust.on("mounted", function () {
      filter(trust);
    });

    trust.mount();

    var filterItems = document.querySelectorAll(".trust-block__filter-item");
    filterItems.forEach(function (el) {
      el.addEventListener("click", function () {
        document
          .querySelector(".trust-block__filter-item.is-active")
          .classList.remove("is-active");
        el.classList.add("is-active");
        filter(trust);
      });
    });
  };
  document.body.appendChild(splide);
});

function filter(splide) {
  var filter = document.querySelector(".trust-block__filter-item.is-active");
  var slides = splide.Components.Slides.get();
  var slidesFilter = splide.Components.Slides.filter(
    "[data-filter='" + filter.getAttribute("data-filter") + "']"
  );

  if (slidesFilter[0]) {
    splide.go(slidesFilter[0].index);
  }
}
