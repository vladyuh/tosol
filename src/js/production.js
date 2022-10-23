window.addEventListener("load", function () {
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {
        new Splide(".js-gallery-block", {
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

        new Splide(".js-certificates-block", {
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

        if(document.querySelectorAll(".js-trust-block__slider").length){
            document.querySelectorAll(".js-trust-block__slider").forEach(function (el){
                new Splide(el, {
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
                }).mount();
            });
        }
        

        let filterToggles = document.querySelectorAll(".js-trust-block__filter-item");
        if(filterToggles.length){
            filterToggles.forEach(function (el) {
                el.addEventListener("click", function () {
                    let id = el.getAttribute("data-filter");
                    document
                        .querySelector(".js-trust-block__filter-item.is-active")
                        .classList.remove("is-active");
                    document
                        .querySelector(".js-trust-block__slider.is-visible")
                        .classList.remove("is-visible");
                    el.classList.add("is-active");
                    document
                        .querySelector(".js-trust-block__slider[data-filter='" + id + "']")
                        .classList.add("is-visible");
                });
            });
        }

    };
    document.body.appendChild(splide);
});