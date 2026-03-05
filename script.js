// floating hearts
document.addEventListener("DOMContentLoaded", function () {

const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 25; i++) {

let heart = document.createElement("div");
heart.className = "heart";
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "%";
heart.style.animationDuration = (8 + Math.random() * 8) + "s";
heart.style.fontSize = (12 + Math.random() * 18) + "px";

heartsContainer.appendChild(heart);

}

});


// player elements
const player = document.getElementById("player");
const progressBar = document.getElementById("progressBar");
const panel = document.getElementById("playerPanel");
const titleEl = document.getElementById("playerTitle");
const playBtn = document.getElementById("playPauseBtn");


// play song
function playSong(songPath, title, artist) {

titleEl.innerHTML =
title +
"<br><span style='font-size:0.8em;color:#bbb'>" +
artist +
"</span>";

panel.classList.add("active");

if (!player.src.includes(songPath)) {
player.src = songPath;
player.load();
}

player.play();
playBtn.innerHTML = "⏸";

}


// close player
function closePlayer() {
panel.classList.remove("active");
}


// play pause toggle
function togglePlay() {

if (player.paused) {
player.play();
playBtn.innerHTML = "⏸";
} else {
player.pause();
playBtn.innerHTML = "▶";
}

}


// progress update
player.addEventListener("timeupdate", function () {

if (player.duration) {
progressBar.value = (player.currentTime / player.duration) * 100;
}

});


// seek when slider moves
progressBar.addEventListener("input", function () {

if (player.duration) {
player.currentTime = (progressBar.value / 100) * player.duration;
}

});