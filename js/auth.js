function signup() {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful");
  window.location.href = "signin.html";
}

function login() {
  const saved = JSON.parse(localStorage.getItem("user"));
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (saved && email === saved.email && pass === saved.password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};