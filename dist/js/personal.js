window.addEventListener("load", function () {

    let certToggles = this.document.querySelectorAll(".js-personal-certificates__toggle");
    if (certToggles.length) {
        certToggles.forEach(function (el) {
            el.addEventListener("click", function () {
                let id = el.getAttribute("data-tab");
                document
                    .querySelector(".js-personal-certificates__toggle.is-active")
                    .classList.remove("is-active");
                document
                    .querySelector(".js-personal-certificates__tab.is-active")
                    .classList.remove("is-active");
                el.classList.add("is-active");
                document
                    .querySelector(".js-personal-certificates__tab[data-tab='" + id + "']")
                    .classList.add("is-active");
            });
        });
    }

    let docsToggles = this.document.querySelectorAll(".js-personal-docs__toggle");
    if (docsToggles.length) {
        docsToggles.forEach(function (el) {
            el.addEventListener("click", function () {
                let id = el.getAttribute("data-tab");
                document
                    .querySelector(".js-personal-docs__toggle.is-active")
                    .classList.remove("is-active");
                document
                    .querySelector(".js-personal-docs__tab.is-active")
                    .classList.remove("is-active");
                el.classList.add("is-active");
                document
                    .querySelector(".js-personal-docs__tab[data-tab='" + id + "']")
                    .classList.add("is-active");
            });
        });
    }

});
