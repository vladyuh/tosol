window.addEventListener("load", function () {
    
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){
        
        var banner = new Splide(".homepage-banner__slider", {
            perPage: 1,
            arrows: true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            rewind: true,
            pauseOnFocus: false,
            pauseOnHover: false,
        });

        var list = new Splide(".homepage-banner__contains-list", {
            perPage: 6,
            arrows: false,
            pagination: false,
            direction: "ttb",
            height: "100%",
            isNavigation: true,
        });

        banner.sync(list);

        banner.mount();
        list.mount();



        new Splide(".homepage-brands__items", {
            perPage: 1,
            arrows: true,
            pagination: false,
            mediaQuery: "min",
            gap: 16,
            breakpoints: {
                831: {
                    pagination: true,
                }
            }
        }).mount();

        new Splide(".homepage-press__items", {
            perPage: 1,
            arrows: false,
            pagination: false,
            mediaQuery: "min",
            autoHeight: true,
            gap: 16,
            breakpoints: {
                641: {
                    perPage: 2
                },
                1025: {
                    perPage: 3
                },
                1153: {
                    gap: 70
                }
            }
        }).mount();
        
    };
    document.body.appendChild(splide);
    
});