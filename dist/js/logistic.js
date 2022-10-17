window.addEventListener("load", function () {
    
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function (){

        new Splide('.gallery-block', {
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
                    gap: 70
                }
            }
        }).mount();
        
    };
    document.body.appendChild(splide);
    
});