const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const loveSong = document.getElementById('loveSong');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const heartsContainer = document.getElementById('hearts');

/* Navigation */
function showPage(page){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
page.classList.add('active');
}

/* Musique (clic réel utilisateur) */
playBtn.addEventListener('click', function(){

if(loveSong.paused){
loveSong.play()
.then(()=>{
playBtn.textContent="⏸ Pause";
})
.catch(err=>{
console.log("Lecture bloquée :",err);
});
}else{
loveSong.pause();
playBtn.textContent="▶ Jouer la Musique";
}

});

/* Navigation pages */
nextBtn.addEventListener('click',()=>showPage(page2));

yesBtn.addEventListener('click',()=>{
showPage(page3);
startHearts();
});

/* Bouton NON qui fuit 😄 */
noBtn.addEventListener('mouseover',()=>{
noBtn.style.position="absolute";
noBtn.style.top=Math.random()*80+"%";
noBtn.style.left=Math.random()*80+"%";
});

/* Animation cœurs */
function startHearts(){
setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(20+Math.random()*25)+"px";
heartsContainer.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},300);
}
