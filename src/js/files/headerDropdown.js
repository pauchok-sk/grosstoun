export default function headerDrodpown() {
  const buttons = document.querySelectorAll("[data-header-dropdown-btn]");

  if (buttons.length) {
    const overlay = document.querySelector("#header-dropdown-overlay");

    overlay.addEventListener("mouseenter", () => {
      const currentDropdown = document.querySelector(
        "[data-header-dropdown]._active"
      );

      currentDropdown?.classList.remove("_active");
      overlay?.classList.remove("_active");
    });

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        const id = btn.dataset.headerDropdownBtn;

        const openDropdown = document.querySelector(
          "[data-header-dropdown]._active"
        );

        if (openDropdown) {
          openDropdown.classList.remove("_active")
        }

        const currentDropdown = document.querySelector(
          `[data-header-dropdown="${id}"]`
        );

        currentDropdown.classList.add("_active");
        overlay.classList.add("_active");
      });
    });
  }
}
