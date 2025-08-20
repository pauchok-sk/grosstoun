export default function filtersToggle() {
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
