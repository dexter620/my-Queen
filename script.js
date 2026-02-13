document.addEventListener("DOMContentLoaded", function () {

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn  = document.getElementById("yesBtn");
const noBtn   = document.getElementById("noBtn");

const loveSong = document.getElementById("loveSong");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const heartsContainer = document.getElementById("hearts");

function showPage(page){
document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
page.classList.add("active");
}

/* Musique */
playBtn.addEventListener("click", function(){
if(loveSong.paused){
loveSong.play();
playBtn.textContent = "⏸ Pause";
}else{
loveSong.pause();
playBtn.textContent = "▶ Jouer la Musique";
}
});

/* Page 2 */
nextBtn.addEventListener("click", function(){
showPage(page2);
});

/* Page 3 */
yesBtn.addEventListener("click", function(){
showPage(page3);
startHearts();
});

/* Bouton NON qui fuit */
noBtn.addEventListener("mouseenter", function(){
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});

/* Animation coeurs */
function startHearts(){
setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(20+Math.random()*25)+"px";
heartsContainer.appendChild(heart);
setTimeout(()=>heart.remove(),5000);
},300);
}

});
