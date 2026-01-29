document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Smooth Scrolling (Opsional)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Alert untuk tombol 'Beli Sekarang'
const ctaButton = document.querySelector("#cta-button");

ctaButton.addEventListener("click", function (e) {
  e.preventDefault(); //
  alert(
    "Fitur Pembelian sedang dalam pengembangan. Stay tuned yaa, love u! 💻🚀 -atmin",
  );
});

// 1. Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Ketika hamburger menu diklik
hamburger.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// 2. Klik di luar elemen untuk menutup navbar (Penting biar user gak bingung!)
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.querySelector("#search").onclick = (e) => {
  e.preventDefault();
  alert("Fitur pencarian lagi disiapin.sabar dlu yee🔍");
};

document.querySelector("#shopping-cart").onclick = (e) => {
  e.preventDefault();
  alert("Keranjangnya masih dipake buat tempat kopi, Banh! 🛒");
};
