// ===== script.js =====

// Tampilkan popup video
function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Tutup popup video
function hidePopup() {
  const popup = document.getElementById("popup");
  const video = document.getElementById("popupVideo");
  popup.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

// Tutup popup saat klik luar konten
window.addEventListener("click", function (event) {
  const popup = document.getElementById("popup");
  const content = document.querySelector(".popup-content");
  if (event.target === popup && !content.contains(event.target)) {
    hidePopup();
  }
});
