window.addEventListener("load", function () {
    
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){

        if(document.querySelector('.js-articles-more')){

            new Splide(".js-articles-more", {
                perPage: 1,
                arrows: true,
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

        }

        if(document.querySelector('.js-materials-more')){

            new Splide(".js-materials-more", {
                perPage: 1,
                arrows: true,
                pagination: false,
                mediaQuery: "min",
                autoHeight: true,
                gap: 16,
                breakpoints: {
                    1025: {
                        perPage: 2,
                        gap: 60
                    },
                }
            }).mount();

        }


        
    };
    document.body.appendChild(splide);
    
});