window.addEventListener("load", function () {
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {

        if (document.querySelectorAll(".js-trust-block__slider").length) {
            document.querySelectorAll(".js-trust-block__slider").forEach(function (el) {
                new Splide(el, {
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
                }).mount();
            });
        }


        let filterToggles = document.querySelectorAll(".js-trust-block__filter-item");
        if (filterToggles.length) {
            filterToggles.forEach(function (el) {
                el.addEventListener("click", function () {
                    let id = el.getAttribute("data-filter");
                    document
                        .querySelector(".js-trust-block__filter-item.is-active")
                        .classList.remove("is-active");
                    document
                        .querySelector(".js-trust-block__slider.is-visible")
                        .classList.remove("is-visible");
                    el.classList.add("is-active");
                    document
                        .querySelector(".js-trust-block__slider[data-filter='" + id + "']")
                        .classList.add("is-visible");
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
    if (filter) {
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

        let coords, region, center;

        let activeRegion = document.querySelector(".js-distribute-map__region.is-active");
        if (activeRegion) {
            coords = activeRegion.getAttribute("data-center").split(",");
            region = activeRegion.getAttribute("data-region");
        }

        let myMap = new ymaps.Map("map", {
            center: coords,
            zoom: 14,
            controls: [],
        });






        let listItems = document.querySelectorAll(".js-distribute-map__list-item");
        if (listItems.length) {
            listItems.forEach(function (el) {
                if (el.getAttribute("data-region") !== region) {
                    el.classList.add("is-hidden");
                }
                if (el.getAttribute("data-coords")) {
                    addPlacemark(el);

                    el.addEventListener("click", function () {
                        centerMap(el.getAttribute("data-coords").split(","));
                    });

                }


            });
        }

        //load from URL
        if (window.location.hash != '') {



            document.querySelectorAll(".js-distribute-map__region a").forEach(item => {
                if (item.getAttribute('href') == window.location.hash) {
                    region = item.parentNode.getAttribute("data-region")


                    if (item.parentNode.getAttribute("data-center")) {
                        center = item.parentNode.getAttribute("data-center").split(",")
                    }

                    item.parentNode.classList.add('is-active')
                } else {
                    if (item.parentNode.classList.contains('is-active')) item.parentNode.classList.remove('is-active')
                }
            })


            changeRegion(region);

            if (center) {
                centerMap(center);
            }


        } else {
            changeRegion(region);
            centerMap(listItems[0].getAttribute("data-coords").split(","));
        }



        let regions = document.querySelectorAll(".js-distribute-map__region");
        if (regions.length) {
            regions.forEach(function (el) {
                el.addEventListener("click", function () {

                    if (document.querySelector(".js-distribute-map__region.is-active")) {
                        document.querySelector(".js-distribute-map__region.is-active").classList.remove("is-active");
                    }


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

            myMap.container.fitToViewport()
        }

        function changeRegion(region) {
            let listItems = document.querySelectorAll(".js-distribute-map__list-item");
            if (listItems.length) {
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

            placemark = new ymaps.Placemark(coords, {
                balloonContentBody: "<div class='distribute-map__list-item no-padding'>" + el.innerHTML + "</div>",
            }, {
                iconLayout: "default#image",
                iconImageHref: "../img/svg/pin.svg",
                iconImageSize: [32, 32],
                balloonShadow: false,
                hideIconOnBalloonOpen: false,
            });

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
    if (searchField) {
        let listItems = document.querySelectorAll(".js-distribute-map__list-item");

        searchField.addEventListener("input", function (e) {
            for (let i = 0; i < listItems.length; i++) {
                if (listItems[i].innerText.toLowerCase().includes(searchField.value.toLowerCase())) {
                    listItems[i].classList.remove("is-hide");
                } else {
                    listItems[i].classList.add("is-hide");
                }
            }
        });
    }


}