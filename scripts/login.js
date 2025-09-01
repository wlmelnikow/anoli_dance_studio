 const ADMIN_USER = "AdmiN";   // тут задаєш логін
  const ADMIN_PASS = "1234Qq";    // тут задаєш пароль

  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "admin.html"; // редірект в адмінку
    } else {
      document.getElementById("error").textContent = "Неправильний логін або пароль!";
    }
  });