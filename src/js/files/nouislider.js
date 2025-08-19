export default function nouislider() {
  const range = document.querySelector("#price-range");

  if (range) {
    const min = range.dataset.min;
    const max = range.dataset.max;

    const inputMin = document.querySelector("#price-min");
    const inputMax = document.querySelector("#price-max");
    const inputs = [inputMin, inputMax];

    noUiSlider.create(range, {
      start: [+min],
      connect: [true, false],
      range: {
        min: [+min],
        max: [+max],
      },
    });

    range.noUiSlider.on("update", (values, handle) => {
      inputs[handle].value = Math.round(values[handle]);
    });
  }
}
