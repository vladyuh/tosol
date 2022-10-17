window.addEventListener("load", function () {
    
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){

        var years = new Splide('.history-block__years', {
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

        var main = new Splide('.history-block__slider', {
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