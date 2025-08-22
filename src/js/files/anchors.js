export default function anchors() {
  document.querySelectorAll("[data-anchor]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        window.scrollBy({
          top: scrollTarget.getBoundingClientRect().top,
          behavior: "smooth",
        });
      }

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
