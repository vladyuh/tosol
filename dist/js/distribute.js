window.addEventListener("load", function () {
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {

        let trust = new Splide(".trust-block", {
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

        let filterItems = document.querySelectorAll(".trust-block__filter-item");
        if(filterItems.length){
            filterItems.forEach(function (el) {
                el.addEventListener("click", function () {
                    document
                        .querySelector(".trust-block__filter-item.is-active")
                        .classList.remove("is-active");
                    el.classList.add("is-active");
                    filter(trust);
                });
            });
        }

    };
    document.body.appendChild(splide);

    let maps = document.createElement("script");
    maps.src = "https://api-maps.yandex.ru/2.1/?apikey=2137445b-d7b4-409e-b7f3-edf16078dc3a&lang=ru_RU";
    maps.onload = initMap;
    document.body.appendChild(maps);

});

function filter(splide) {
    let filter = document.querySelector(".js-trust-block__filter-item.is-active");
    if(filter){
        let slides = splide.Components.Slides.get();
        let slidesFilter = splide.Components.Slides.filter(
            "[data-filter='" + filter.getAttribute("data-filter") + "']"
        );

        if (slidesFilter[0]) {
            splide.go(slidesFilter[0].index);
        }
    }

}

function initMap() {
    ymaps.ready(function () {

        let coords,region;

        let activeRegion = document.querySelector(".js-distribute-map__region.is-active");
        if(activeRegion){
            coords = activeRegion.getAttribute("data-center").split(",");
            region = activeRegion.getAttribute("data-region");
        }

        let myMap = new ymaps.Map("map", {
            center: coords,
            zoom: 14,
            controls: [],
        });

        changeRegion(region);

        let listItems = document.querySelectorAll(".js-distribute-map__list-item");
        if(listItems.length){
            listItems.forEach(function (el) {
                if (el.getAttribute("data-region") !== region) {
                    el.classList.add("is-hidden");
                }
                if (el.getAttribute("data-coords")) {
                    addPlacemark(el);

                    el.addEventListener("click", function (){
                        centerMap(el.getAttribute("data-coords").split(","));
                    });

                }


            });
        }


        centerMap(listItems[0].getAttribute("data-coords").split(","));

        let regions = document.querySelectorAll(".js-distribute-map__region");
        if(regions.length){
            regions.forEach(function (el) {
                el.addEventListener("click", function () {
                    document.querySelector(".js-distribute-map__region.is-active").classList.remove("is-active");
                    el.classList.add("is-active");
                    if (el.getAttribute("data-center")) {
                        centerMap(el.getAttribute("data-center").split(","));
                    }
                    if (el.getAttribute("data-region")) {
                        changeRegion(el.getAttribute("data-region"));
                    }
                });
            });
        }


        function centerMap(coords) {
            myMap.setCenter(coords, 14, {
                checkZoomRange: true
            });
        }

        function changeRegion(region) {
            let listItems = document.querySelectorAll(".js-distribute-map__list-item");
            if(listItems.length){
                listItems.forEach(function (el) {
                    if (el.getAttribute("data-region") !== region) {
                        el.classList.add("is-hidden");
                    } else {
                        el.classList.remove("is-hidden");
                    }
                });
            }

        }

        function addPlacemark(el) {

            let elem = el;

            let coords = el.getAttribute("data-coords").split(",");

            placemark = new ymaps.Placemark(coords,
                {
                    balloonContentBody: "<div class='distribute-map__list-item no-padding'>" + el.innerHTML + "</div>",
                },
                {
                    iconLayout: "default#image",
                    iconImageHref: "../img/svg/pin.svg",
                    iconImageSize: [32, 32],
                    balloonShadow: false,
                    hideIconOnBalloonOpen: false,
                }
            );

            myMap.geoObjects.add(placemark);

            placemark.events
                .add("mouseenter", function (e) {
                    e.get("target").options.set("iconImageHref", "../img/svg/pin-hover.svg");
                })
                .add("mouseleave", function (e) {
                    e.get("target").options.set("iconImageHref", "../img/svg/pin.svg");
                });

        }


    });

    let searchField = document.querySelector(".js-distribute-map__list-search input");
    if(searchField){
        let listItems = document.querySelectorAll(".js-distribute-map__list-item");

        searchField.addEventListener("input", function (e){
            for(let i = 0; i < listItems.length; i++){
                if(listItems[i].innerText.toLowerCase().includes(searchField.value.toLowerCase())){
                    listItems[i].classList.remove("is-hide");
                }
                else{
                    listItems[i].classList.add("is-hide");
                }
            }
        });
    }


}