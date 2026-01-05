function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "landing.html";
}

const counter = document.getElementById("visitorCount");
if (counter) {
  let count = 2534400;
  setInterval(() => {
    count += Math.floor(Math.random() * 3);
    counter.textContent = count;
  }, 2000);
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "landing.html";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

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

