"use strict"


// Mobile menu toggle functionality
// This script handles the opening and closing of the mobile menu 

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


// Запис на заняття з тренером, датою і часом
const signButtons = document.querySelectorAll('.signup-button');

signButtons.forEach(button => {
  button.addEventListener('click', () => {
    const style = button.dataset.style;
    const trainer = button.dataset.trainer;
    const time = button.dataset.time;

    console.log(`Запись: ${style}, ${trainer}, ${time}`);
    // Здесь можно отправлять эти данные куда нужно
  });
});




// My test code \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const appointmentButton = document.getElementById('appointment-btn');
const appointmentDays = document.getElementById("days");
const appointmentTime = document.getElementById("time");
const appointmentPerson = document.getElementById("person");


// JS
const buttons = document.querySelectorAll('.appointment-btn');
buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
        const row = btn.closest('.schedule-row');
        const days = row.querySelector('.days').textContent;
        const time = row.querySelector('.time').textContent;
        const person = row.querySelector('.person').textContent;

        console.log("Дні:", days);
        console.log("Час:", time);
        console.log("Тренер:", person);

        return perevirkaFunction()

        // тут можеш викликати свою функцію perevirkaFunction, якщо треба
        function perevirkaFunction() {
          let getDays =  days;
          let getTime =  time;
          let getPerson =  person;

          
          console.log(getDays, getTime, getPerson)
        }
    });
});

// 
const parent = document.getElementById('adult-dir');
const btns = document.getElementsByTagName('button');

console.log(btns)

function buttonDefinition (btns) {
  let getBtnIndex = 0;

  if (btns.getBtnIndex() == btns[i]) {
    getBtnIndex = btns[i]
    console.log(getBtnIndex)
  }

  return getBtnIndex + " Main return index"
}

buttonDefinition(2);

// Чтобы мы брали данные из строки "n", с кнопкой записи - указіваєющей на n 