// Sayfayı kaydırdığımızda çalışacak fonksiyon
window.onscroll = function () {
  scrollFunction();
};

// "Yukarı Çık" butonumuzu değişkene atayalım
var scrollTopBtn = document.getElementById("scrollTopBtn");

function scrollFunction() {
  // Kullanıcı 200px'den fazla aşağı kaydırdıysa butonu göster
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    // Değilse gizle
    scrollTopBtn.style.display = "none";
  }
}

// Butona tıklandığında sayfanın en üstüne yumuşakça kaydır
function topFunction() {
  document.body.scrollTop = 0; // Safari için
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera için
}
