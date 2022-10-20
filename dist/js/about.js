window.addEventListener("load", function () {
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {

        let company = new Splide(".js-aboutpage-company__slider", {
            perPage: 1,
            arrows: true,
            pagination: false,
            mediaQuery: "min",
            gap: 16,
        });

        let bar = document.querySelector(".js-aboutpage-company__progress-bar");
        if (!bar) return;
        let dots = document.querySelectorAll(".js-aboutpage-company__progress-dot");
        if (!dots.length) return;

        company.on("mounted move", function () {
            let end = company.Components.Controller.getEnd();
            let rate = Math.min(company.index / end, 1);
            bar.style.width = String(100 * rate) + "%";

            if (
                document.querySelector(".js-aboutpage-company__progress-dot.is-active")
            ) {
                document
                    .querySelector(".js-aboutpage-company__progress-dot.is-active")
                    .classList.remove("is-active");
            }

            dots[company.index].classList.add("is-active");
        });

        company.mount();

        new Splide(".js-aboutpage-staff__slider", {
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

        new Splide(".js-homepage-brands__items", {
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
    };
    document.body.appendChild(splide);
});
