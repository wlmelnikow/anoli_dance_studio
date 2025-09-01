"use strict";

function updateEvent(position) {
  const title = document.getElementById("title-" + position).value;
  const fileInput = document.getElementById("img-" + position);

  if (title) {
    localStorage.setItem("eventTitle-" + position, title);
  }

  if (fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem("eventImage-" + position, e.target.result);
    };
    reader.readAsDataURL(fileInput.files[0]);
  }

  alert("Подія (" + position + ") оновлена!");
}

function resetEvents() {
  ["left", "middle", "right"].forEach(pos => {
    localStorage.removeItem("eventTitle-" + pos);
    localStorage.removeItem("eventImage-" + pos);
  });
  alert("Всі події скинуті до стандартних!");
}


document.querySelectorAll(".event-toggle").forEach(toggle => {
  // при завантаженні відновлюємо стан із localStorage
  const eventKey = toggle.dataset.event;
  const isActive = localStorage.getItem(eventKey) === "true";
  toggle.checked = isActive;

  // при зміні перемикача оновлюємо localStorage
  toggle.addEventListener("change", () => {
    localStorage.setItem(eventKey, toggle.checked);
  });
});