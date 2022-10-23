//Remove animations on load
window.onload = function () {
    document.querySelector("body").classList.remove("is-noanimation");
};

//Check webp support
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support === true) {
        document.querySelector(".js-body").classList.add("is-webp");
    } else {
        document.querySelector(".js-body").classList.add("is-nowebp");
    }
});

//100vh hack
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Mobile menu init
function mobileMenu() {
    let toggle = document.querySelector(".js-header__burger");
    if (!toggle) return;
    let close = document.querySelector(".mobilemenu__header .js-burger");
    if (!close) return;
    let menu = document.querySelector(".js-mobilemenu");
    if (!menu) return;
    let body = document.querySelector(".js-body");
    if (!body) return;

    this.onOpen = function () {
        menu.classList.add("is-open");
        body.classList.add("is-mobile");
        return true;
    };

    this.onClose = function () {
        menu.classList.remove("is-open");
        body.classList.remove("is-mobile");
    };

    this.onToggle = function () {
        menu.classList.toggle("is-open");
        body.classList.toggle("is-mobile");
    };

    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        mobile.onOpen();
    });

    close.addEventListener("click", function (e) {
        e.preventDefault();
        mobile.onClose();
    });
}

let mobile = new mobileMenu();

let navLinks = document.querySelectorAll(".js-mobilemenu__nav-link");
if (navLinks.length) {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            mobile.onClose();
        });
    }
}


//smart neader - hide on scroll down and show on scroll up
let previousScrollPosition = 0;
const isScrollingDown = () => {
    let currentScrolledPosition = window.scrollY || window.pageYOffset;
    let scrollingDown;

    if (currentScrolledPosition > previousScrollPosition) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }
    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
};


function handleNavScroll() {

    const nav = document.querySelector(".js-header");
    if (nav) {
        if (isScrollingDown() && !nav.contains(document.activeElement)) {
            nav.classList.add("is-scrolldown");
            nav.classList.remove("is-scrollup");
        } else {
            nav.classList.add("is-scrollup");
            nav.classList.remove("is-scrolldown");
        }

        if (window.pageYOffset === 0) {
            nav.classList.remove("is-scrollup");
        }
    }


}

function scrollTop() {
    if (window.pageYOffset > 0) {
        this.document
            .querySelector(".scroll-top")
            .classList.add("is-active");
    } else {
        this.document
            .querySelector(".scroll-top")
            .classList.remove("is-active");
    }
}

function showFloating() {

    let foot = document.querySelector(".footer");
    if (!foot) return;

    if (window.pageYOffset > 640) {
        this.document
            .querySelector(".js-floating__menu")
            .classList.add("is-active");
    } else {
        this.document
            .querySelector(".js-floating__menu")
            .classList.remove("is-active");
    }

    if (inViewport(foot)) {
        this.document
            .querySelector(".js-floating__menu")
            .classList.add("is-white");
    } else {
        this.document
            .querySelector(".js-floating__menu")
            .classList.remove("is-white");
    }


}

window.addEventListener("scroll", () => {
    //Smart header
    handleNavScroll();

    //Scroll to top btn
    scrollTop();

    showFloating();

});

//Scroll to top btn
scrollTop();
if (document.querySelector(".js-scroll-top")) {
    document.querySelector(".js-scroll-top").addEventListener("click", function () {
        window.scroll({top: 0, left: 0, behavior: "smooth"});
    });
}


//Load scripts after page load
window.addEventListener("load", function () {
    let select = document.createElement("script");
    select.src = "/js/select.min.js";
    select.onload = function () {
        const selectCustom = new customSelect({
            selector: ".select select",
        });
        selectCustom.init();
    };
    document.body.appendChild(select);

    if (document.querySelector("[data-fslightbox]")) {

        let fs = document.createElement("script");
        fs.src = "/js/fslightbox.min.js";
        fs.onload = function () {

            if (document.querySelector("[data-gallery]")) {

                var galleryLinks = document.querySelectorAll("[data-gallery]");
                galleryLinks.forEach(function (el){
                    el.addEventListener("click", function (e){
                        e.preventDefault();
                        let sources = el.getAttribute("data-gallery");
                        let lightbox = new FsLightbox();
                        lightbox.props.sources = sources.split(",");
                        lightbox.open();
                    });
                });

            }

        };
        document.body.appendChild(fs);

    }


    //Browser-level image lazy-loading
    if ("loading" in HTMLImageElement.prototype || "loading" in HTMLIFrameElement.prototype) {
        const images = document.querySelectorAll("img[loading=\"lazy\"]");
        for (let i = 0; i < images.length; i++) {
            images[i].src = images[i].dataset.src;
        }

        const iframes = document.querySelectorAll("iframe[loading=\"lazy\"]");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].dataset.src;
        }
    } else {
        const script = document.createElement("script");
        script.src = "/js/lazysizes.min.js";
        document.body.appendChild(script);
    }
});

//close popups
let popupClose = document.querySelectorAll(".js-popup");
if (popupClose.length) {
    popupClose.forEach(function (element) {
        element.addEventListener("click", function (e) {
            if (e.target !== e.currentTarget) {
            } else {
                window.location.href = "#close";
            }
        });
    });
}


if (document.querySelector(".js-header__search-toggle")) {
    document.querySelector(".js-header__search-toggle")
        .addEventListener("click", function (e) {
            document.querySelector(".js-header__search").classList.toggle("is-active");
        });
}


document.addEventListener("click", function (e) {
    if (!findAncestor(e.target, "header__search")) {
        document.querySelector(".js-header__search").classList.remove("is-active");
    }
});

document.querySelectorAll(".js-footer__nav-toggle, .js-mobilemenu__nav-toggle").forEach(function (el) {
    el.addEventListener("click", function (e) {
        el.parentElement.classList.toggle("is-active");
    });
});

function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) ;
    return el;
}

let showPassword = document.querySelectorAll(".js-input-password__show");
if (showPassword.length) {
    showPassword.forEach(function (el) {
        el.addEventListener("click", function (e) {

            let parent = findAncestor(el, "input-password");
            parent.classList.toggle("is-visible");

            if (parent.classList.contains("is-visible")) {
                parent.querySelector("input").type = "text";
            } else {
                parent.querySelector("input").type = "password";
            }

        });
    });
}

function inViewport(element) {
    if (!element) return false;
    if (1 !== element.nodeType) return false;

    let html = document.documentElement;
    let rect = element.getBoundingClientRect();

    return !!rect &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.left <= html.clientWidth &&
        rect.top <= html.clientHeight;
}

let searchField = document.querySelector(".js-popup-cities__search input");
if (searchField) {
    let listItems = document.querySelectorAll(".js-popup-cities__list-item");
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


function initMaska() {
    var maska = document.createElement("script");
    maska.src = "js/maska.min.js";
    maska.onload = function () {
        Maska.create("input[type=\"tel\"]", {
            mask: "+7 (###) ###-##-##"
        });
        window.removeEventListener("click", initMaska);
    };
    document.body.appendChild(maska);
}

window.addEventListener("click", initMaska);

var fileInputs = document.querySelectorAll(".js-file-input input[type=\"file\"]");
if (fileInputs.length) {

    fileInputs.forEach(function (el) {
        el.addEventListener("change", function () {

            var parent = el.parentNode;
            var dataText = parent.getAttribute("data-caption");
            var caption = parent.querySelector(".js-file-input__title");

            if (el.files.length) {
                if (caption) {
                    caption.textContent = el.files[0].name;
                }
            } else {
                if (caption) {
                    caption.textContent = dataText;
                }
            }
        });
    });

}