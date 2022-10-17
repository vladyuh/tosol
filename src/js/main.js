//Remove animations on load
window.onload = function () {
    document.querySelector("body").classList.remove("page_noanimation");
};

//Check webp support
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support === true) {
        document.querySelector("body").classList.add("page_webp");
    } else {
        document.querySelector("body").classList.add("page_nowebp");
    }
});

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Mobile menu init
function mobileMenu() {
    var toggle = document.querySelector(".header__burger");
    var close = document.querySelector(".mobilemenu__header .burger");
    var menu = document.querySelector(".mobilemenu");
    var body = document.querySelector("body");

    this.onOpen = function () {
        menu.classList.add("mobilemenu_opened");
        body.classList.add("page_mobile");
        return true;
    };

    this.onClose = function () {
        menu.classList.remove("mobilemenu_opened");
        body.classList.remove("page_mobile");
    };

    this.onToggle = function () {
        menu.classList.toggle("mobilemenu_opened");
        body.classList.toggle("page_mobile");
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

var mobile = new mobileMenu();

var navLinks = document.querySelectorAll(".mobilemenu__nav-link");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        mobile.onClose();
    });
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

const nav = document.querySelector("header");

function handleNavScroll() {
    if (isScrollingDown() && !nav.contains(document.activeElement)) {
        nav.classList.add("header_scrolldown");
        nav.classList.remove("header_scrollup");
    } else {
        nav.classList.add("header_scrollup");
        nav.classList.remove("header_scrolldown");
    }

    if (window.pageYOffset === 0) {
        nav.classList.remove("header_scrollup");
    }
}

function scrollTop() {
    if (window.pageYOffset > 0) {
        this.document
            .querySelector(".scroll-top")
            .classList.add("scroll-top_active");
    } else {
        this.document
            .querySelector(".scroll-top")
            .classList.remove("scroll-top_active");
    }
}

window.addEventListener("scroll", () => {
    //Smart header
    handleNavScroll();

    //Scroll to top btn
    scrollTop();
});

//Scroll to top btn
scrollTop();
document.querySelector(".scroll-top").addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

//Load scripts after page load
window.addEventListener("load", function () {
    var select = document.createElement("script");
    select.src = "/js/select.min.js";
    select.onload = function () {
        const selectCustom = new customSelect({
            selector: "select",
        });
        selectCustom.init();
    };
    document.body.appendChild(select);

    //Browser-level image lazy-loading
    if (
        "loading" in HTMLImageElement.prototype ||
    "loading" in HTMLIFrameElement.prototype
    ) {
        const images = document.querySelectorAll("img[loading=\"lazy\"]");
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].dataset.src;
        }

        const iframes = document.querySelectorAll("iframe[loading=\"lazy\"]");
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].dataset.src;
        }
    } else {
        const script = document.createElement("script");
        script.src = "/js/lazysizes.min.js";
        document.body.appendChild(script);
    }
});

//open popup
var popupLink = document.querySelectorAll("a[data-popup]");
popupLink.forEach(function (element) {
    element.addEventListener("click", function (e) {
    });
});

//close popups
var popupClose = document.querySelectorAll(".popup");
popupClose.forEach(function (element) {
    element.addEventListener("click", function (e) {
        if (e.target !== e.currentTarget) {
        } else {
            window.location.href = "#close";
        }
    });
});

document
    .querySelector(".header__search-toggle")
    .addEventListener("click", function (e) {
        document.querySelector(".header__search").classList.toggle("is-active");
    });

document.addEventListener("click", function (e) {
    if (!findAncestor(e.target, "header__search")) {
        document.querySelector(".header__search").classList.remove("is-active");
    }
});

document.querySelectorAll(".footer__nav-toggle").forEach(function (el) {
    el.addEventListener("click", function (e) {
        el.parentElement.classList.toggle("is-active");
    });
});

function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}
