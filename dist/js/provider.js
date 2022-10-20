window.addEventListener("load", function () {
    let splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = function () {
        
      let splid = new Splide(".js-provider-steps__slider", {
            perPage: 1,
            arrows: true,
            pagination: false,
            mediaQuery: "min",
            gap: 16,
        });

        let bar = document.querySelector(".js-provider-steps__progress-bar");
        if (!bar) return;
        let current = document.querySelector(".js-provider-steps__count-current");
        if (!current) return;
        let all = document.querySelector(".js-provider-steps__count-all");
        if (!all) return;

        let dots = document.querySelectorAll(".js-provider-steps__progress-dot");
        if(dots.length){
            splid.on("mounted move", function () {
                let end = splid.Components.Controller.getEnd();
                let rate = Math.min(splid.index / end, 1);
                bar.style.width = String(100 * rate) + "%";
                current.innerHTML = splid.index + 1;
                all.innerHTML = "из " + splid.length;

                if (document.querySelector(".js-provider-steps__progress-dot.is-active")) {
                    document
                        .querySelector(".js-provider-steps__progress-dot.is-active")
                        .classList.remove("is-active");
                }

                dots[splid.index].classList.add("is-active");
            });
        }

        splid.mount();
    };
    document.body.appendChild(splide);
});
