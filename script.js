// --- Typed.js (Yazı Efekti) Ayarları ---
var typed = new Typed(".typing-text", {
  strings: [
    "Full Stack Developer",
    "Python Geliştirici",
    "Yapay Zeka(AI) Tutkunu",
    "Mobil Uygulama Geliştirici",
    "Yazılım Geliştirici",
    "Java Developer",
  ],
  typeSpeed: 50, // Yazma hızı
  backSpeed: 30, // Silme hızı
  backDelay: 1500, // Yazdıktan sonra bekleme süresi
  loop: true, // Döngü olsun mu? Evet.
});

// --- Mobil Menü İşlemleri ---
const hamburger = document.getElementById("hamburger-button");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// --- Yukarı Çık Butonu ---
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
