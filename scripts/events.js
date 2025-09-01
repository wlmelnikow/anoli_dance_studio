"use strict";

document.addEventListener("DOMContentLoaded", () => {
  ["left", "middle", "right"].forEach(pos => {
    const title = localStorage.getItem("eventTitle-" + pos);
    const image = localStorage.getItem("eventImage-" + pos);

    if (title) {
      document.querySelector("." + pos + "-block .overlay p").textContent = title;
    }
    if (image) {
      document.querySelector("." + pos + "-block img").src = image;
    }
  });
});