export default function fileAttach() {
  const inputs = document.querySelectorAll(".input-file");

  if (inputs.length) {
    inputs.forEach(input => {
      input.addEventListener("change", (e) => {
        if (e.target.files[0]) {
          const label = document.querySelector(`label[for='${input.id}']`);

          label.querySelector("span").textContent = label.dataset.attachText || 'Файл прикреплен';
        }
      })
    })
  }
}