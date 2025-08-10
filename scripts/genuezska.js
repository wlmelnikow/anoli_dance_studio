"use strict"


// Мобільне меню
// Цей скрипт відкриває і закриваю модальне вікно з меню
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("closeBtn");

  burger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});




// Телеграм бот
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("contactForm");

let selectedStyle = "";
let selectedTrainer = "";
let selectedTime = "";

// Відслідковуємо всі кнопки з класом openModal
document.querySelectorAll(".openModal").forEach(button => {
  button.addEventListener("click", (e) => {
    // Зчитуємо data-атрибути кнопки, на яку клікнули
    selectedStyle = e.currentTarget.dataset.style;
    selectedTrainer = e.currentTarget.dataset.trainer;
    selectedTime = e.currentTarget.dataset.time;

    // Відкриваємо модальне вікно
    modal.style.display = "flex";
  });
});

// Закриття модалки кнопкою ×
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закриття модалки кліком поза контентом
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Обробка відправки форми
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Збір даних з форми
  const name = form.name.value.trim();
  const tel = form.tel.value.trim();

  if (!name || !tel) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  const token = "7612632327:AAHsJRKMPTv1bRXmO-VMi8E-i3eQc41fuPg"; // твій токен
  const chatId = "201081680"; // твій chat_id

  const message = `
Нова заявка на заняття філії ГЕНУЕЗСЬКА:
Стиль: ${selectedStyle}
Тренер: ${selectedTrainer}
Час: ${selectedTime}
Ім'я: ${name}
Телефон: ${tel}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message })
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        alert("✅ Заявка відправлена! Скоро з вами зв'яжуться.");
        form.reset();
        modal.style.display = "none";
      } else {
        alert("❌ Помилка при відправці: " + data.description);
      }
    })
    .catch(() => alert("❌ Помилка мережі. Спробуйте пізніше."));
});
