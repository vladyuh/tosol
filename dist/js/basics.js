window.addEventListener("load", function () {
    
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){

        new Splide('.certificates-block', {
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
                }
            }
        }).mount();
        
    };
    document.body.appendChild(splide);
    
});