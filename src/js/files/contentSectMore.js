export default function contentSectMore() {
  const sect = document.querySelector(".s-content");

  if (sect) {
    const items = Array.from(
      sect.querySelector(".s-content__content").children
    ).slice(6);
    const btn = sect.querySelector(".s-content__btn-more");
    const btnTitle = btn.querySelector("span");

    btn.addEventListener("click", () => {
      if (btn.classList.contains("_active")) {
        handleClose();
      } else {
        handleOpen();
      }
    });

    function handleOpen() {
      items.forEach((item) => {
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
      items.forEach((item) => {
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
