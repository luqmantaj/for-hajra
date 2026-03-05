document.addEventListener("DOMContentLoaded", function(){

const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 25; i++) {

let heart = document.createElement("div");
heart.className = "heart";
heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "%";
heart.style.animationDuration = (8 + Math.random()*8) + "s";
heart.style.fontSize = (12 + Math.random()*18) + "px";

heartsContainer.appendChild(heart);

}

});
function playSong(songPath,title,artist){

const player = document.getElementById("player");
const panel = document.getElementById("playerPanel");
const titleEl = document.getElementById("playerTitle");

titleEl.innerHTML = title + "<br><span style='font-size:0.8em;color:#bbb'>" + artist + "</span>";

panel.classList.add("active");

if(player.src.includes(songPath)){
return;
}

player.src = songPath;
player.load();
player.play();

}


function togglePlay(){

const player = document.getElementById("player");
const btn = document.getElementById("playPauseBtn");

if(player.paused){
player.play();
btn.innerHTML = "⏸";
}else{
player.pause();
btn.innerHTML = "▶";
}

}
const player = document.getElementById("player");
const progressBar = document.getElementById("progressBar");

player.addEventListener("timeupdate", function(){

if(player.duration){
progressBar.value = (player.currentTime / player.duration) * 100;
}

});
progressBar.addEventListener("input", function(){

if(player.duration){
player.currentTime = (progressBar.value / 100) * player.duration;
}

});

function closePlayer(){

const panel = document.getElementById("playerPanel");

panel.classList.remove("active");

}