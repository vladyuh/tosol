window.addEventListener("load", function () {

    let catalogToggles = this.document.querySelectorAll(".js-catalog-detail__toggle");
    if (catalogToggles.length) {
        catalogToggles.forEach(function (el) {
            el.addEventListener("click", function () {
                let id = el.getAttribute("data-tab");
                document
                    .querySelector(".js-catalog-detail__toggle.is-active")
                    .classList.remove("is-active");
                document
                    .querySelector(".js-catalog-detail__tab.is-active")
                    .classList.remove("is-active");
                el.classList.add("is-active");
                document
                    .querySelector(".js-catalog-detail__tab[data-tab='" + id + "']")
                    .classList.add("is-active");
            });
        });
    }

    let video = document.querySelectorAll('.js-catalog-detail__video');
    if (video.length != 0) {
        video[0].addEventListener('click', function () {
            const videoId = this.getAttribute('data-id');
            let iframe = document.createElement('iframe');
            iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0&loop=1";
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('width', "100%");
            iframe.setAttribute('height', "100%");
            iframe.setAttribute('frameborder', "0");
            this.append(iframe);
            this.classList.add('is-play');
        });
    }


});
