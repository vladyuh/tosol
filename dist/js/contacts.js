window.addEventListener("load", function () {
    let toggles = this.document.querySelectorAll(".js-contacts-block__toggle");
    toggles.forEach(function (el) {
        el.addEventListener("click", function () {
            let id = el.getAttribute("data-tab");
            document
                .querySelector(".js-contacts-block__toggle.is-active")
                .classList.remove("is-active");
            document
                .querySelector(".js-contacts-block__tab.is-active")
                .classList.remove("is-active");
            el.classList.add("is-active");
            document
                .querySelector(".js-contacts-block__tab[data-tab='" + id + "']")
                .classList.add("is-active");
        });
    });
});
