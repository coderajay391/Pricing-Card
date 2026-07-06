const toggle = document.getElementById("priceToggle");

const prices = document.querySelectorAll(".amount");
const labels = document.querySelectorAll(".price small");

toggle.addEventListener("change", () => {
  prices.forEach((price) => {
    if (toggle.checked) {
      price.textContent = price.dataset.year;
    } else {
      price.textContent = price.dataset.month;
    }
  });

  labels.forEach((label) => {
    label.textContent = toggle.checked ? "/year" : "/month";
  });
});
