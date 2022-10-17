window.addEventListener("load", function () {

    var certToggles = this.document.querySelectorAll(".personal-certificates__toggle");
    if (certToggles.length) {
        certToggles.forEach(function (el) {
            el.addEventListener("click", function () {
                var id = el.getAttribute("data-tab");
                document
                    .querySelector(".personal-certificates__toggle.is-active")
                    .classList.remove("is-active");
                document
                    .querySelector(".personal-certificates__tab.is-active")
                    .classList.remove("is-active");
                el.classList.add("is-active");
                document
                    .querySelector(".personal-certificates__tab[data-tab='" + id + "']")
                    .classList.add("is-active");
            });
        });
    }

    var docsToggles = this.document.querySelectorAll(".personal-docs__toggle");
    if (docsToggles.length) {
        docsToggles.forEach(function (el) {
            el.addEventListener("click", function () {
                var id = el.getAttribute("data-tab");
                document
                    .querySelector(".personal-docs__toggle.is-active")
                    .classList.remove("is-active");
                document
                    .querySelector(".personal-docs__tab.is-active")
                    .classList.remove("is-active");
                el.classList.add("is-active");
                document
                    .querySelector(".personal-docs__tab[data-tab='" + id + "']")
                    .classList.add("is-active");
            });
        });
    }

});
