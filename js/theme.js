function toggleTheme() {
  document.body.classList.toggle("dark");
}

function searchCourses() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.getAttribute("data-title");

    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
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