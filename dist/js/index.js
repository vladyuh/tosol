window.addEventListener("load", function () {

    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {

        let banner = new Splide(".js-homepage-banner__slider", {
            perPage: 1,
            arrows: true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            rewind: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            drag: true,
        });

        let list = new Splide(".js-homepage-banner__contains-list", {
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



        new Splide(".js-homepage-brands__items", {
            perPage: 1,
            arrows: true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            rewind: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            mediaQuery: "min",
            gap: 16,
            drag: true,
            breakpoints: {
                831: {
                    pagination: true,
                }
            }
        }).mount();

        new Splide(".js-homepage-press__items", {
            perPage: 1,
            arrows: false,
            pagination: false,
            mediaQuery: "min",
            autoHeight: true,
            gap: 16,
            drag: true,
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

    /* ==========================================
    video
    ==========================================*/



    if (document.querySelector('[data-video]')) {

        function youtube_parser(url) {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = url.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        }

        document.querySelectorAll('[data-video]').forEach(item => {
            item.addEventListener('click', function (e) {

                e.preventDefault()
                let html = `
                        <div id="video" class="popup js-popup popup-video">
                            <div class="popup__wrapper">
                            <div class="popup__close"><a href="#close">
                                <svg width="20" height="20"> <use xlink:href="/img/sprites/sprite.svg#ic_popup-close"></use> </svg></a></div>
                            <div class="popup__content">
                                <div class="popup__content-iframe">
                                    <div class="video-player" >
                                        <div class="video-player__inner" >
                                            <iframe src="https://www.youtube.com/embed/${youtube_parser(item.dataset.video)}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0" ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>`;

                let div = document.createElement('div');
                div.innerHTML = html;

                div.querySelector('.popup__close').addEventListener('click', function () {
                    div.remove()
                })

                document.body.append(div);
                window.location.hash = 'video';

            })
        })
    }

});