// --- Yukarı Çık Butonu Fonksiyonları ---
window.onscroll = function () {
  scrollFunction();
  highlightNavOnScroll(); // Aktif linki de kontrol et
};
var scrollTopBtn = document.getElementById("scrollTopBtn");
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --- Mobil Menü (Hamburger) Fonksiyonları ---
const hamburgerButton = document.getElementById("hamburger-button");
const navLinks = document.getElementById("nav-links");

hamburgerButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburgerButton.classList.toggle("active");
});

// Mobil menüdeki bir linke tıklandığında menüyü kapat
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburgerButton.classList.remove("active");
    }
  });
});

// --- Aktif Menü Öğesi Vurgulama Fonksiyonu ---
const sections = document.querySelectorAll(".content-section"); // id'si olan tüm bölümler
const navLi = document.querySelectorAll(".nav-links li a"); // Navbar linkleri

function highlightNavOnScroll() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Navbar yüksekliği kadar offset
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active-link");
    // GÜNCELLEME: href değeriyle section id'sini eşleştir
    if (current && a.getAttribute("href") === "#" + current) {
      a.classList.add("active-link");
    }
  });

  // Eğer en üstteyse veya hiçbir section aktif değilse, aktif linki kaldır
  if (pageYOffset < sections[0].offsetTop - 80) {
    navLi.forEach((a) => a.classList.remove("active-link"));
  }
}
