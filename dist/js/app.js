(() => {
    "use strict";
    function anchors_anchors() {
        document.querySelectorAll("[data-anchor]").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                let href = this.getAttribute("href").substring(1);
                const scrollTarget = document.getElementById(href);
                if (scrollTarget) window.scrollBy({
                    top: scrollTarget.getBoundingClientRect().top,
                    behavior: "smooth"
                });
                handlerBurgerClose();
            });
        });
        function handlerBurgerClose() {
            const burger = document.querySelector("#burger");
            const burgerOverlay = document.querySelector("#burger-overlay");
            burger.classList.remove("_open");
            burgerOverlay.classList.remove("_active");
            document.body.classList.remove("body-hidden");
        }
    }
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerClose = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            burger.addEventListener("click", e => e.stopPropagation());
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", e => {
                e.stopPropagation();
                console.log("fa");
                handlerBurgerOpen();
            });
            burgerClose.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerClose();
            });
            function handlerBurgerOpen() {
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                document.body.classList.add("body-hidden");
            }
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function handlerBurgerClose() {
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        burger.classList.remove("_open");
        burgerOverlay.classList.remove("_active");
        document.body.classList.remove("body-hidden");
    }
    function contentSectMore() {
        const sect = document.querySelector(".s-content");
        if (sect) {
            const items = Array.from(sect.querySelector(".s-content__content").children).slice(6);
            const btn = sect.querySelector(".s-content__btn-more");
            const btnTitle = btn?.querySelector("span");
            if (sect.querySelector(".s-content__content").children.length <= 6) btn.remove();
            if (btn) btn.addEventListener("click", () => {
                if (btn.classList.contains("_active")) handleClose(); else handleOpen();
            });
            function handleOpen() {
                items.forEach(item => {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.transform = "translateY(0)";
                        item.style.opacity = 1;
                    }, 10);
                });
                btnTitle.textContent = "Скрыть текст";
                btn.classList.add("_active");
            }
            function handleClose() {
                items.forEach(item => {
                    item.style.transform = "translateY(-20px)";
                    item.style.opacity = 0;
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 200);
                });
                btnTitle.textContent = "Читать полностью";
                btn.classList.remove("_active");
            }
        }
    }
    function fileAttach() {
        const inputs = document.querySelectorAll(".input-file");
        if (inputs.length) inputs.forEach(input => {
            input.addEventListener("change", e => {
                if (e.target.files[0]) {
                    const label = document.querySelector(`label[for='${input.id}']`);
                    label.querySelector("span").textContent = label.dataset.attachText || "Файл прикреплен";
                }
            });
        });
    }
    function filtersToggle() {
        const filters = document.querySelector("#filters");
        if (filters) {
            const filtersOpen = document.querySelector("#filters-open");
            const filtersClose = document.querySelector("#filters-close");
            const overlay = document.querySelector("#filters-overlay");
            filtersOpen.addEventListener("click", handleOpen);
            filtersClose.addEventListener("click", handleClose);
            overlay.addEventListener("click", handleClose);
            function handleOpen() {
                document.body.classList.add("body-hidden");
                filters.classList.add("_active");
                overlay.classList.add("_active");
            }
            function handleClose() {
                document.body.classList.remove("body-hidden");
                filters.classList.remove("_active");
                overlay.classList.remove("_active");
            }
        }
    }
    function headerDrodpown() {
        const buttons = document.querySelectorAll("[data-header-dropdown-btn]");
        if (buttons.length) {
            const overlay = document.querySelector("#header-dropdown-overlay");
            overlay.addEventListener("mouseenter", () => {
                const currentDropdown = document.querySelector("[data-header-dropdown]._active");
                currentDropdown?.classList.remove("_active");
                overlay?.classList.remove("_active");
            });
            buttons.forEach(btn => {
                btn.addEventListener("mouseenter", () => {
                    const id = btn.dataset.headerDropdownBtn;
                    const openDropdown = document.querySelector("[data-header-dropdown]._active");
                    if (openDropdown) openDropdown.classList.remove("_active");
                    const currentDropdown = document.querySelector(`[data-header-dropdown="${id}"]`);
                    currentDropdown.classList.add("_active");
                    overlay.classList.add("_active");
                });
            });
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        if (header) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > header.clientHeight && scrollTop > lastScrollTop) header.classList.add("_scroll"); else header.classList.remove("_scroll");
                lastScrollTop = scrollTop;
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function map() {
        const contactsMap = document.querySelector("#map");
        if (contactsMap) {
            function init() {
                const center = JSON.parse(contactsMap.dataset.center);
                const zoom = Number(contactsMap.dataset.zoom);
                const map = new ymaps.Map("map", {
                    center,
                    zoom
                });
                const placemark = new ymaps.Placemark(center, {}, {});
                map.controls.remove("geolocationControl");
                map.controls.remove("searchControl");
                map.controls.remove("trafficControl");
                map.controls.remove("typeSelector");
                map.controls.remove("fullscreenControl");
                map.controls.remove("zoomControl");
                map.controls.remove("rulerControl");
                map.behaviors.disable([ "scrollZoom" ]);
                map.geoObjects.add(placemark);
            }
            ymaps.ready(init);
        }
    }
    function nouislider() {
        const range = document.querySelector("#price-range");
        if (range) {
            const min = range.dataset.min;
            const max = range.dataset.max;
            const inputMin = document.querySelector("#price-min");
            const inputMax = document.querySelector("#price-max");
            const inputs = [ inputMin, inputMax ];
            noUiSlider.create(range, {
                start: [ +min ],
                connect: [ true, false ],
                range: {
                    min: [ +min ],
                    max: [ +max ]
                }
            });
            range.noUiSlider.on("update", (values, handle) => {
                inputs[handle].value = Math.round(values[handle]);
            });
        }
    }
    function sliders() {
        const stepsSlider = document.querySelector(".s-steps__slider");
        if (stepsSlider) {
            const navButtons = document.querySelectorAll(".s-steps__nav-btn");
            const btnsNext = document.querySelectorAll(".s-steps__btn-next");
            const swiper = new Swiper(stepsSlider, {
                speed: 900,
                effect: "fade",
                on: {
                    slideChange: ({activeIndex}) => {
                        navButtons.forEach(b => b.classList.remove("_active"));
                        navButtons[activeIndex].classList.add("_active");
                    }
                }
            });
            navButtons.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    swiper.slideTo(index);
                    navButtons.forEach(b => b.classList.remove("_active"));
                    btn.classList.add("_active");
                });
            });
            btnsNext.forEach(btn => {
                btn.addEventListener("click", () => {
                    swiper.slideNext();
                });
            });
        }
        const heroSlider = document.querySelector(".hero__slider");
        if (heroSlider) {
            const isFlex = document.querySelector(".hero__gallery").classList.contains("_flex");
            const thumbSlider = document.querySelector(".hero__thumb-slider");
            const thumbSwiper = new Swiper(thumbSlider, {
                speed: 800,
                spaceBetween: 20,
                slidesPerView: "auto",
                direction: "horizontal",
                breakpoints: {
                    768: {
                        spaceBetween: 24,
                        slidesPerView: 3,
                        direction: isFlex ? "vertical" : "horizontal"
                    }
                }
            });
            new Swiper(heroSlider, {
                speed: 800,
                spaceBetween: 20,
                autoplay: {
                    delay: 3500
                },
                thumbs: {
                    swiper: thumbSwiper
                },
                navigation: {
                    prevEl: ".hero__slider-arrow._prev",
                    nextEl: ".hero__slider-arrow._next"
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelectorAll("[data-tab-btn]");
                const allTabs = container.querySelectorAll("[data-tab]");
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_active");
                    t.style.opacity = 0;
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.style.opacity = 1;
                }, 10);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
    }
    spoller();
    burger();
    inputmask();
    fileAttach();
    tabs();
    headerScroll();
    headerDrodpown();
    sliders();
    contentSectMore();
    nouislider();
    filtersToggle();
    anchors_anchors();
    map();
    Fancybox.bind("[data-fancybox]", {});
})();