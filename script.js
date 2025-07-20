// script.js

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function hidePopup() {
  const popup = document.getElementById("popup");
  const video = document.getElementById("popupVideo");
  popup.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

// Optional: close popup when clicking outside the video
window.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");
  const content = document.querySelector(".popup-content");
  if (e.target === popup && !content.contains(e.target)) {
    hidePopup();
  }
});
