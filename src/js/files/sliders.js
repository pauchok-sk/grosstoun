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

  const heroSlider = document.querySelector(".hero__slider");

  if (heroSlider) {
    const thumbSlider = document.querySelector(".hero__thumb-slider");

    const thumbSwiper = new Swiper(thumbSlider, {
      speed: 800,
      spaceBetween: 20,
      slidesPerView: "auto",
      breakpoints: {
        768: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
      },
    });

    const swiper = new Swiper(heroSlider, {
      speed: 800,
      spaceBetween: 20,
      autoplay: {
        delay: 3500
      },
      thumbs: {
        swiper: thumbSwiper,
      },
      navigation: {
        prevEl: ".hero__slider-arrow._prev",
        nextEl: ".hero__slider-arrow._next"
      }
    });
  }
}
