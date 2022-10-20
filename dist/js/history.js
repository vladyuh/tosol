window.addEventListener("load", function () {
    
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){

        let years = new Splide('.js-history-block__years', {
            perPage: 3,
            arrows: false,
            pagination: false,
            mediaQuery: "min",
            gap: 16,
            isNavigation: true,
            autoWidth: true,
            breakpoints: {
                481: {
                },
                641: {
                },
                831: {
                },
                1025: {
                },
                1153: {
                    gap: 60
                }
            }
        });

        let main = new Splide('.js-history-block__slider', {
            perPage: 1,
            arrows: true,
            pagination: false,
            mediaQuery: "min",
            gap: 16,
            isNavigation: true,
            breakpoints: {
                831: {
                }
            }
        });

        main.sync(years);
        main.mount();
        years.mount();

    };
    document.body.appendChild(splide);
    
});