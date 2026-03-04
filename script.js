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