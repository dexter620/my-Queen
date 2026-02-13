const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const loveSong = document.getElementById('loveSong');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const heartsContainer = document.getElementById('hearts');

function showPage(page){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
page.classList.add('active');
}

/* Music */
playBtn.addEventListener('click',()=>{
if(loveSong.paused){
loveSong.play();
playBtn.textContent="⏸ Pause";
}else{
loveSong.pause();
playBtn.textContent="▶ Jouer la Musique";
}
});

/* Navigation */
nextBtn.addEventListener('click',()=>showPage(page2));
yesBtn.addEventListener('click',()=>{
showPage(page3);
startHearts();
});

/* Funny NO button */
noBtn.addEventListener('mouseover',()=>{
noBtn.style.position="absolute";
noBtn.style.top=Math.random()*80+"%";
noBtn.style.left=Math.random()*80+"%";
});

/* Hearts animation */
function startHearts(){
setInterval(()=>{
const heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(20+Math.random()*30)+"px";
heartsContainer.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},300);
}
