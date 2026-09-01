// =========================================================================
// 1. ÇİFT DİLLİ ÇEVİRİ SÖZLÜĞÜ (TR / EN)
// =========================================================================
const translations = {
  tr: {
    nav_about: "Hakkımda",
    nav_skills: "Yetenekler",
    nav_projects: "Projeler",
    nav_blog: "Yazılarım",
    nav_contact: "İletişim",
    hero_subtitle: "Bilgisayar Mühendisi",
    hero_im: "Ben bir ",
    btn_cv: "CV İndir",
    about_title: "Hakkımda",
    about_p1:
      "Bilgisayar Mühendisliği alanında kendini sürekli geliştirmeye ve yapay zekâ teknolojilerinin sınırlarını keşfetmeye odaklanan bir bilgisayar mühendisiyim. Lisans eğitimimi Atatürk Üniversitesi Bilgisayar Mühendisliği Bölümü'nde 3.41/4.00 genel not ortalamasıyla ve Onur Öğrencisi olarak tamamladım. Lisans eğitimim boyunca yazılım geliştirme, algoritmalar, veri yapıları, yapay zekâ ve bilgisayar sistemleri başta olmak üzere bilgisayar mühendisliğinin farklı alanlarında kendimi geliştirme fırsatı buldum.",
    about_p2:
      "Akademik çalışmalarımı Sakarya Üniversitesi Bilgisayar Mühendisliği Tezli Yüksek Lisans Programı'nda sürdürmekteyim. Yüksek lisans eğitimimde özellikle <strong>Yapay Zekâ, Makine Öğrenmesi, Derin Öğrenme, Doğal Dil İşleme (NLP), Bilgisayarlı Görü ve Görüntü İşleme</strong> alanlarına yoğunlaşarak hem teorik bilgi birikimimi hem de uygulamalı araştırma deneyimimi geliştirmekteyim.",
    about_p3:
      "Özellikle yapay zekâ modellerinin gerçek dünya problemlerine uygulanması, büyük ve karmaşık veri kümelerinden anlamlı bilgiler çıkarılması ve öğrenebilen sistemlerin geliştirilmesi ilgimi çekmektedir. Makine öğrenmesi ve derin öğrenme tabanlı modeller, Transformer mimarileri, bilgisayarlı görü, görüntü işleme ve doğal dil işleme üzerine çalışmalar gerçekleştiriyor; güncel yapay zekâ yöntemlerini takip ederek bu teknolojileri farklı disiplinlerde uygulanabilir hâle getirmeye çalışıyorum.",
    about_p4:
      "Araştırma ve geliştirme çalışmalarımda yalnızca mevcut modelleri kullanmayı değil, aynı zamanda problemlere özgün ve yenilikçi çözümler üretmeyi hedefliyorum. Yapay zekânın sağlık, astronomi, hukuk, görüntü analizi ve doğal dil işleme gibi farklı alanlardaki kullanım potansiyeli özellikle ilgimi çekiyor. Akademik çalışmalarımı bilimsel yayınlar, veri setleri ve deneysel çalışmalar üzerinden ilerleterek araştırmacı kimliğimi geliştirmeyi amaçlıyorum.",
    about_p5:
      "Teknik gelişimin yanı sıra akademik üretim, araştırma, proje geliştirme ve disiplinler arası çalışmalar benim için önemli. Uzun vadede yapay zekâ ve bilgisayar mühendisliği alanında nitelikli bilimsel çalışmalar gerçekleştiren, geliştirdiği teknolojilerle gerçek problemlere çözüm üreten ve akademik dünyaya katkı sağlayan bir araştırmacı olmayı hedefliyorum.",
    skills_title: "Teknik Yetenekler",
    skills_cat1: "Diller",
    skills_cat2: "Yapay Zeka & Veri",
    skills_cat3: "Araçlar & Framework",
    skill_ml: "Makine Öğrenmesi",
    skill_dl: "Derin Öğrenme",
    skill_nlp: "NLP (Doğal Dil İşleme)",
    skill_cv: "Bilgisayarlı Görü",
    skill_ds: "Veri Bilimi",
    skill_genai: "Üretken Yapay Zeka",
    skill_xai: "Açıklanabilir YZ (XAI)",
    projects_title: "Öne Çıkan Projeler",
    btn_review: "İncele",
    blog_title: "Yazılarım & Medium",
    btn_read: "Oku",
    contact_title: "İletişime Geç",
    contact_desc:
      "Akademik çalışmalar, yapay zeka projeleri veya işbirlikleri için benimle iletişime geçebilirsiniz.",
    contact_linkedin: "LinkedIn Profilim",
    form_name_label: "İsim Soyisim",
    form_email_label: "E-posta Adresi",
    form_msg_label: "Mesajınız",
    btn_send: "Mesaj Gönder",
    footer_rights: "Tüm hakları saklıdır.",
  },
  en: {
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_blog: "Articles",
    nav_contact: "Contact",
    hero_subtitle: "Computer Engineer",
    hero_im: "I'm a ",
    btn_cv: "Download CV",
    about_title: "About Me",
    about_p1:
      "I am a Computer Engineer focused on continuous self-improvement and exploring the boundaries of artificial intelligence technologies. I completed my undergraduate studies at Atatürk University's Computer Engineering Department as an Honor Student with a GPA of 3.41/4.00. Throughout my undergraduate education, I had the opportunity to develop myself in various areas of computer engineering, particularly in software development, algorithms, data structures, artificial intelligence, and computer systems.",
    about_p2:
      "I am continuing my academic studies in the Computer Engineering Master's Program (with Thesis) at Sakarya University. In my graduate education, I focus especially on <strong>Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, and Image Processing</strong>, enhancing both my theoretical knowledge and applied research experience.",
    about_p3:
      "I am particularly interested in applying artificial intelligence models to real-world problems, extracting meaningful information from large and complex datasets, and developing learning systems. I work on machine learning and deep learning-based models, Transformer architectures, computer vision, image processing, and natural language processing; I follow current artificial intelligence methods and strive to make these technologies applicable across different disciplines.",
    about_p4:
      "In my research and development studies, my goal is not only to use existing models but also to produce original and innovative solutions to problems. The potential use of artificial intelligence in fields such as healthcare, astronomy, law, image analysis, and natural language processing particularly attracts my interest. I aim to develop my researcher identity by advancing my academic studies through scientific publications, datasets, and experimental studies.",
    about_p5:
      "In addition to technical development, academic production, research, project development, and interdisciplinary studies are important to me. In the long term, I aim to be a researcher who conducts qualified scientific studies in the field of artificial intelligence and computer engineering, produces solutions to real problems with the technologies developed, and contributes to the academic world.",
    skills_title: "Technical Skills",
    skills_cat1: "Languages",
    skills_cat2: "AI & Data",
    skills_cat3: "Tools & Frameworks",
    skill_ml: "Machine Learning",
    skill_dl: "Deep Learning",
    skill_nlp: "Natural Language Processing (NLP)",
    skill_cv: "Computer Vision",
    skill_ds: "Data Science",
    skill_genai: "Generative AI",
    skill_xai: "Explainable AI (XAI)",
    projects_title: "Featured Projects",
    btn_review: "Review",
    blog_title: "Articles & Medium",
    btn_read: "Read",
    contact_title: "Get in Touch",
    contact_desc:
      "You can contact me for academic studies, AI projects, or collaborations.",
    contact_linkedin: "LinkedIn Profile",
    form_name_label: "Full Name",
    form_email_label: "Email Address",
    form_msg_label: "Your Message",
    btn_send: "Send Message",
    footer_rights: "All rights reserved.",
  },
};

// =========================================================================
// 2. DİNAMİK PROJE VE BLOG VERİLERİ (BILINGUAL)
// =========================================================================
const projectsData = [
  {
    icon: "fas fa-wallet",
    link: "https://github.com/alisemiz/Finans-Takip-Uygulamas-.git",
    tr: {
      title: "Finans Takip Sistemi",
      desc: "C dili ve SQLite veritabanı kullanılarak geliştirilen, gelir-gider takibi sağlayan konsol tabanlı sistem.",
      tags: ["C", "SQLite", "Veri Yapıları"],
    },
    en: {
      title: "Finance Tracking System",
      desc: "A console-based system developed using C and SQLite for income and expense tracking.",
      tags: ["C", "SQLite", "Data Structures"],
    },
  },
  {
    icon: "fas fa-user-graduate",
    link: "https://github.com/alisemiz/OgrenciBilgiSistemi.git",
    tr: {
      title: "Öğrenci Bilgi Sistemi",
      desc: "Java ve JavaFX teknolojileriyle, öğrenci kayıt ve not yönetimini sağlayan masaüstü uygulaması.",
      tags: ["Java", "JavaFX", "Desktop"],
    },
    en: {
      title: "Student Information System",
      desc: "A desktop application for student registration and grade management using Java and JavaFX.",
      tags: ["Java", "JavaFX", "Desktop"],
    },
  },
  {
    icon: "fab fa-python",
    link: "https://github.com/alisemiz/python-script-collection.git",
    tr: {
      title: "Python Algoritmaları",
      desc: "Veri yapıları ve algoritma mantığını pekiştirmek için geliştirilen kapsamlı script koleksiyonu.",
      tags: ["Python", "Algoritma"],
    },
    en: {
      title: "Python Algorithms",
      desc: "A comprehensive script collection developed to reinforce data structures and algorithm logic.",
      tags: ["Python", "Algorithms"],
    },
  },
  {
    icon: "fas fa-film",
    link: "https://github.com/alisemiz/SinemaOtomasyonu.git",
    tr: {
      title: "Sinema Otomasyonu",
      desc: "Bilet satışı, salon yönetimi ve raporlama sunan JavaFX & SQLite tabanlı otomasyon.",
      tags: ["JavaFX", "SQLite", "OOP"],
    },
    en: {
      title: "Cinema Automation",
      desc: "JavaFX & SQLite based automation offering ticket sales, hall management, and reporting.",
      tags: ["JavaFX", "SQLite", "OOP"],
    },
  },
  {
    icon: "fas fa-hotel",
    link: "https://github.com/alisemiz/OtelRezervasyonSistemi.git",
    tr: {
      title: "Otel Rezervasyon",
      desc: "Python Tkinter arayüzü ile kullanıcı dostu rezervasyon yönetim sistemi.",
      tags: ["Python", "Tkinter", "SQLite"],
    },
    en: {
      title: "Hotel Reservation",
      desc: "A user-friendly reservation management system with Python Tkinter interface.",
      tags: ["Python", "Tkinter", "SQLite"],
    },
  },
  {
    icon: "fas fa-gamepad",
    link: "https://github.com/alisemiz/SFML-Yilan-Oyunu.git",
    tr: {
      title: "SFML Yılan Oyunu",
      desc: "C++ ve SFML kütüphanesi ile geliştirilmiş, modern mekaniklere sahip klasik yılan oyunu.",
      tags: ["C++", "SFML", "Game Dev"],
    },
    en: {
      title: "SFML Snake Game",
      desc: "A classic snake game with modern mechanics developed using C++ and the SFML library.",
      tags: ["C++", "SFML", "Game Dev"],
    },
  },
  {
    icon: "fas fa-clapperboard",
    link: "https://github.com/alisemiz/SinefilAsistani-JavaFX.git",
    tr: {
      title: "Sinefil Asistanı",
      desc: "TMDb API entegrasyonu ile film keşfi ve izleme listesi yönetimi sağlayan uygulama.",
      tags: ["JavaFX", "API", "JSON"],
    },
    en: {
      title: "Cinephile Assistant",
      desc: "An application providing movie discovery and watchlist management via TMDb API integration.",
      tags: ["JavaFX", "API", "JSON"],
    },
  },
  {
    icon: "fas fa-utensils",
    link: "https://github.com/alisemiz/tarif-defteri-web.git",
    tr: {
      title: "Tarif Defteri Web",
      desc: "HTML, CSS, JS ve Firebase kullanılarak yapılan sunucusuz (serverless) tarif platformu.",
      tags: ["Firebase", "JavaScript", "Web"],
    },
    en: {
      title: "Recipe Book Web",
      desc: "A serverless recipe platform built using HTML, CSS, JS, and Firebase.",
      tags: ["Firebase", "JavaScript", "Web"],
    },
  },
  {
    icon: "fab fa-trello",
    link: "https://github.com/alisemiz/react-kanban-trello-clone.git",
    tr: {
      title: "Kanban Panosu",
      desc: "React ve Firebase ile geliştirilmiş, Sürükle-Bırak (Drag&Drop) özellikli proje yönetim aracı.",
      tags: ["React", "Firebase", "SaaS"],
    },
    en: {
      title: "Kanban Board",
      desc: "A drag-and-drop project management tool developed with React and Firebase.",
      tags: ["React", "Firebase", "SaaS"],
    },
  },
  {
    icon: "fas fa-robot",
    link: "https://github.com/alisemiz/ai-ozetleyici-projesi.git",
    tr: {
      title: "AI Metin Özetleyici",
      desc: "Flask (Python) backend ve React frontend mimarisiyle çalışan, NLP tabanlı Türkçe özet çıkarma aracı.",
      tags: ["AI/ML", "Flask", "React"],
    },
    en: {
      title: "AI Text Summarizer",
      desc: "An NLP-based summarization tool running on a Flask backend and React frontend.",
      tags: ["AI/ML", "Flask", "React"],
    },
  },
];

const blogData = [
  {
    link: "https://medium.com/@alisemiz777/agiyi-beklerken-yanl%C4%B1%C5%9F-yere-bakt%C4%B1k-gelecek-d%C3%BC%C5%9F%C3%BCnen-de%C4%9Fil-hisseden-makinelerde-bb3b41d43cb9",
    tr: {
      title: "AGI’yı Beklerken Yanlış Yere Baktık",
      desc: "“Terminatör” senaryolarını bırakın. Asıl kırılma, bir yapay zekanın ilk kez canının sıkılmasıyla başlayacak.",
    },
    en: {
      title: "Looking in the Wrong Place for AGI",
      desc: "Forget 'Terminator' scenarios. The real breakthrough will start when an AI gets bored for the first time.",
    },
  },
  {
    link: "https://medium.com/@alisemiz2727/makine-%C3%B6%C4%9Frenmesi-bir-bilin%C3%A7-yaratabilir-mi-kara-kutu-nun-i%CC%87%C3%A7ine-felsefi-bir-yolculuk-482a08843b6e",
    tr: {
      title: "Makine Öğrenmesi Bir Bilinç Yaratabilir mi?",
      desc: "Derin öğrenme modellerinin “düşünme” şeklini incelerken, zekanın ve farkındalığın ne anlama geldiğini sorguluyoruz.",
    },
    en: {
      title: "Can Machine Learning Create Consciousness?",
      desc: "Examining how deep learning models 'think' forces us to question the true meaning of intelligence and awareness.",
    },
  },
  {
    link: "https://medium.com/@alisemiz2727/bilgisayar-bilimlerini-anlamak-neden-sadece-kod-yazmak-demek-de%C4%9Fil-a9d5b1b2186b",
    tr: {
      title: "Bilgisayar Bilimlerini Anlamak",
      desc: "Bilgisayar Bilimleri sadece kod yazmak mıdır? Karanlık odadaki hacker imajının ötesine geçiyoruz.",
    },
    en: {
      title: "Understanding Computer Science",
      desc: "Is Computer Science just writing code? Moving beyond the image of a hacker in a dark room.",
    },
  },
  {
    link: "https://medium.com/@alisemiz2727/bilgisayar-bilimlerinin-s%C4%B1rr%C4%B1-karma%C5%9F%C4%B1kl%C4%B1kla-sava%C5%9Fma-sanat%C4%B1-51f63a40311b",
    tr: {
      title: "Karmaşıklıkla Savaşma Sanatı",
      desc: "Neden 'Fonksiyon' var? Neden OOP öğreniyoruz? Yazılımın karmaşıklığıyla nasıl başa çıkılır?",
    },
    en: {
      title: "The Art of Fighting Complexity",
      desc: "Why do 'Functions' exist? Why do we learn OOP? How to deal with software complexity.",
    },
  },
];

// =========================================================================
// 3. DİL DEĞİŞTİRME (BILINGUAL) YÖNETİMİ
// =========================================================================
let currentLang = localStorage.getItem("lang") || "tr";
const langBtn = document.getElementById("lang-toggle");
let typedInstance = null;

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  langBtn.innerText = lang === "tr" ? "EN" : "TR";

  // HTML üzerindeki data-i18n etiketlerini çevir
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // İletişim formu yer tutucularını (placeholder) çevir
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const msgInput = document.getElementById("message");
  if (nameInput)
    nameInput.placeholder =
      lang === "tr" ? "Adınız Soyadınız" : "Your Full Name";
  if (emailInput)
    emailInput.placeholder =
      lang === "tr" ? "ornek@mail.com" : "example@mail.com";
  if (msgInput)
    msgInput.placeholder =
      lang === "tr"
        ? "Mesajınızı buraya yazın..."
        : "Write your message here...";

  renderDynamicContent();
  initTyped();
}

function renderDynamicContent() {
  // Projeleri Render Et
  const projectContainer = document.getElementById("project-container");
  if (projectContainer) {
    projectContainer.innerHTML = projectsData
      .map(
        (proj, i) => `
      <article class="project-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
          <div class="card-header">
              <i class="${proj.icon}"></i>
              <h3>${proj[currentLang].title}</h3>
          </div>
          <p>${proj[currentLang].desc}</p>
          <div class="tags">
              ${proj[currentLang].tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <a href="${proj.link}" class="btn-project" target="_blank" rel="noopener noreferrer" aria-label="${proj[currentLang].title}">
            ${translations[currentLang].btn_review} <i class="fas fa-arrow-right"></i>
          </a>
      </article>
    `,
      )
      .join("");
  }

  // Blogları Render Et
  const blogContainer = document.getElementById("blog-container");
  if (blogContainer) {
    blogContainer.innerHTML = blogData
      .map(
        (blog, i) => `
      <a href="${blog.link}" target="_blank" rel="noopener noreferrer" class="blog-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
          <div class="blog-content">
              <span class="blog-date">Medium</span>
              <h4>${blog[currentLang].title}</h4>
              <p>${blog[currentLang].desc}</p>
              <span class="read-more">${translations[currentLang].btn_read} <i class="fas fa-arrow-right"></i></span>
          </div>
      </a>
    `,
      )
      .join("");
  }
}

langBtn.addEventListener("click", () => {
  setLanguage(currentLang === "tr" ? "en" : "tr");
});

// Sayfa yüklendiğinde varsayılan dili ayarla
setLanguage(currentLang);

// =========================================================================
// 4. TYPED.JS (DAKTİLO EFEKTİ) YÖNETİMİ
// =========================================================================
function initTyped() {
  if (typedInstance) typedInstance.destroy();

  const stringsTr = [
    "Yapay Zeka Araştırmacısı",
    "NLP & Makine Öğrenmesi",
    "Python Geliştirici",
    "Full Stack Developer",
  ];
  const stringsEn = [
    "AI Researcher",
    "NLP & Machine Learning",
    "Python Developer",
    "Full Stack Developer",
  ];

  const typingElement = document.querySelector(".typing-text");
  if (typingElement) {
    typedInstance = new Typed(".typing-text", {
      strings: currentLang === "tr" ? stringsTr : stringsEn,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
  }
}

// =========================================================================
// 5. TEMA (LIGHT/DARK) YÖNETİMİ
// =========================================================================
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

// =========================================================================
// 6. MOBİL MENÜ VE ERİŞİLEBİLİRLİK (A11Y)
// =========================================================================
const hamburger = document.getElementById("hamburger-button");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isExpanded = navLinks.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isExpanded);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// =========================================================================
// 7. SCROLLSPY VE YUKARI ÇIK BUTONU YÖNETİMİ
// =========================================================================
const sections = document.querySelectorAll("section[id]");
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  // Aktif Menü Vurgulama
  let current = "";
  sections.forEach((section) => {
    if (pageYOffset >= section.offsetTop - section.clientHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  // Yukarı Çık Butonunu Göster/Gizle
  if (pageYOffset > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
