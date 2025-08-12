export default function sliders() {
  const stepsSlider = document.querySelector(".s-steps__slider");

  if (stepsSlider) {
    const navButtons = document.querySelectorAll(".s-steps__nav-btn");
    const btnsNext = document.querySelectorAll(".s-steps__btn-next");

    const swiper = new Swiper(stepsSlider, {
      speed: 900,
      effect: "fade",
      on: {
        slideChange: ({ activeIndex }) => {
          navButtons.forEach((b) => b.classList.remove("_active"));
          navButtons[activeIndex].classList.add("_active");
        },
      },
    });

    navButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        swiper.slideTo(index);
        navButtons.forEach((b) => b.classList.remove("_active"));
        btn.classList.add("_active");
      });
    });

    btnsNext.forEach((btn) => {
      btn.addEventListener("click", () => {
        swiper.slideNext();
      });
    });
  }
}
