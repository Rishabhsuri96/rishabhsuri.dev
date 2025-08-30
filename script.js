const introText = "Electronics & Computer Engineering | AI/ML & IoT Enthusiast";
let i = 0;
const speed = 80;

function typeWriter() {
    if (i < introText.length) {
        document.getElementById("intro").innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

window.onload = () => {
    const button = document.getElementById("dark-mode-toggle");
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
};

window.onload = () => {
  const button = document.getElementById("dark-mode-toggle");
  console.log("Button found:", button);
  button.addEventListener("click", () => {
    console.log("Dark mode toggled");
    document.body.classList.toggle("dark-mode");
  });
};

// smooth scrolling :
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElem = document.querySelector(this.getAttribute('href'));
    targetElem.scrollIntoView({ behavior: 'smooth' });
  });
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



