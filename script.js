// Typing Effect
const roles = [
  "Web Developer",
  "Computer Engineering Student",
  "Frontend Developer"
];

let i = 0, j = 0;
const typing = document.querySelector(".typing");

function type() {
  if (j < roles[i].length) {
    typing.textContent += roles[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = roles[i].substring(0, --j);
    setTimeout(erase, 60);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(type, 400);
  }
}
type();

// Cursor
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", e => {
  cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
  <script>
const form = document.querySelector(".contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const button = document.getElementById("submit-btn");

// Initially disable
button.disabled = true;
button.style.opacity = "0.5";

// Check inputs
function checkInputs() {
  if (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    messageInput.value.trim() !== ""
  ) {
    button.disabled = false;
    button.style.opacity = "1";
  } else {
    button.disabled = true;
    button.style.opacity = "0.5";
  }
}

// Listen typing
nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
messageInput.addEventListener("input", checkInputs);

// On submit
form.addEventListener("submit", () => {
  button.innerText = "Sending...";
  button.disabled = true;
});
</script>
