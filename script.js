// Event Handling
document.getElementById("clickBtn").addEventListener("click", function () {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "#8bc34a";
});

document.getElementById("hoverBtn").addEventListener("mouseover", function () {
  this.style.backgroundColor = "#03a9f4";
  this.textContent = "Hovered!";
});

document.addEventListener("keypress", function (e) {
  console.log("You pressed:", e.key);
});

let timer;
document.getElementById("secretBtn").addEventListener("mousedown", function () {
  timer = setTimeout(() => {
    alert("Long press activated!");
  }, 1000);
});

document.getElementById("secretBtn").addEventListener("mouseup", function () {
  clearTimeout(timer);
});

// Interactive Image Gallery
const images = [
  "https://via.placeholder.com/300/FF0000",
  "https://via.placeholder.com/300/00FF00",
  "https://via.placeholder.com/300/0000FF"
];

let currentImage = 0;
const galleryImg = document.getElementById("galleryImage");

document.getElementById("prevBtn").addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImg.src = images[currentImage];
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImg.src = images[currentImage];
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("tab-active"));
    document.getElementById(`tab${tab.dataset.tab}`).classList.add("tab-active");
  });
});

// Form Validation
const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters";
  } else {
    feedback.textContent = "";
  }
});

form.addEventListener("submit", function (e) {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || !email || !password) {
    alert("Please fill out all fields.");
    e.preventDefault();
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    e.preventDefault();
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    e.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});
