const pages=[...document.querySelectorAll(".page")];
const toast=document.getElementById("toast");

function showPage(id){
  pages.forEach(p=>p.classList.add("hidden"));
  const target=document.getElementById(id);
  if(target) target.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-next]").forEach(btn=>{
  btn.addEventListener("click",()=>showPage(btn.dataset.next));
});

document.getElementById("noBtn").addEventListener("click",e=>{
  e.currentTarget.style.position="fixed";
  e.currentTarget.style.left=Math.random()*70+15+"%";
  e.currentTarget.style.top=Math.random()*70+15+"%";
  e.currentTarget.textContent="Nice try 😜";
});

document.querySelectorAll(".gift").forEach(g=>{
  g.addEventListener("click",()=>{
    toast.textContent=g.dataset.message;
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),2600);
  });
});

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".photo").forEach(p=>{
  p.addEventListener("click",()=>{
    lightboxImg.src=p.dataset.img;
    lightbox.classList.remove("hidden");
  });
});
document.getElementById("closeLightbox").addEventListener("click",()=>lightbox.classList.add("hidden"));
lightbox.addEventListener("click",e=>{if(e.target===lightbox) lightbox.classList.add("hidden")});

document.getElementById("replay").addEventListener("click",()=>showPage(""));

function spawnHeart(){
  const h=document.createElement("span");
  h.className="heart"; h.textContent=["❤","♥","✦","💗"][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+"%";
  h.style.fontSize=(12+Math.random()*20)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(spawnHeart,900);
