window.addEventListener("load", function () {
    
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){

        if(document.querySelector('.articles-more')){

            new Splide(".articles-more", {
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

        if(document.querySelector('.materials-more')){

            new Splide(".materials-more", {
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