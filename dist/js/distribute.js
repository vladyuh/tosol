window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {

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

    var maps = document.createElement("script");
    maps.src = "https://api-maps.yandex.ru/2.1/?apikey=2137445b-d7b4-409e-b7f3-edf16078dc3a&lang=ru_RU";
    maps.onload = initMap;
    document.body.appendChild(maps);

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

function initMap(){

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 16,
            controls: [],
        });
    }


}
