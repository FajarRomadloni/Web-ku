// gallery box
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    var myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
    myModal.show();
  }
});

// navbar scroll berubah warna
const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// google translator
function loadGoogleTranslate() {
  new google.translate.TranslateElement("google_element");
}
