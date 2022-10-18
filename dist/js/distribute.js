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

function initMap() {
    ymaps.ready(function () {

        var activeRegion = document.querySelector(".distribute-map__region.is-active");
        var coords = activeRegion.getAttribute('data-center').split(',');
        var region = activeRegion.getAttribute('data-region');


        var myMap = new ymaps.Map("map", {
            center: coords,
            zoom: 14,
            controls: [],
        });

        changeRegion(region);

        var listItems = document.querySelectorAll('.distribute-map__list-item');
        listItems.forEach(function (el) {
            if (el.getAttribute('data-region') !== region) {
                el.classList.add('is-hidden');
            }
            if (el.getAttribute('data-coords')) {
                addPlacemark(el);

                el.addEventListener('click', function (){
                    centerMap(el.getAttribute('data-coords').split(','));
                })

            }


        })

        centerMap(listItems[0].getAttribute('data-coords').split(','));

        var regions = document.querySelectorAll(".distribute-map__region");
        regions.forEach(function (el) {
            el.addEventListener('click', function () {
                document.querySelector(".distribute-map__region.is-active").classList.remove('is-active');
                el.classList.add('is-active');
                if (el.getAttribute('data-center')) {
                    centerMap(el.getAttribute('data-center').split(','));
                }
                if (el.getAttribute('data-region')) {
                    changeRegion(el.getAttribute('data-region'));
                }
            })
        })

        function centerMap(coords) {
            myMap.setCenter(coords, 14, {
                checkZoomRange: true
            });
        }

        function changeRegion(region) {
            var listItems = document.querySelectorAll('.distribute-map__list-item');
            listItems.forEach(function (el) {
                if (el.getAttribute('data-region') !== region) {
                    el.classList.add('is-hidden');
                } else {
                    el.classList.remove('is-hidden');
                }
            })
        }

        function addPlacemark(el) {

            var elem = el;

            var coords = el.getAttribute('data-coords').split(',');

            placemark = new ymaps.Placemark(coords,
                {
                    balloonContentBody: "<div class='distribute-map__list-item no-padding'>" + el.innerHTML + "</div>",
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/svg/pin.svg',
                    iconImageSize: [32, 32],
                    balloonShadow: false,
                    hideIconOnBalloonOpen: false,
                }
            );

            myMap.geoObjects.add(placemark);

            placemark.events
                .add('mouseenter', function (e) {
                    e.get('target').options.set('iconImageHref', '../img/svg/pin-hover.svg');
                })
                .add('mouseleave', function (e) {
                    e.get('target').options.set('iconImageHref', '../img/svg/pin.svg');
                });

        }


    });

    var searchField = document.querySelector('.distribute-map__list-search input');
    var listItems = document.querySelectorAll('.distribute-map__list-item');

    searchField.addEventListener('input', function (e){
        for(var i = 0; i < listItems.length; i++){
            if(listItems[i].innerText.toLowerCase().includes(searchField.value.toLowerCase())){
                listItems[i].classList.remove('is-hide');
            }
            else{
                listItems[i].classList.add('is-hide')
            }
        }
    })

}