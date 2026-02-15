function popHearts(event) {
  const x = event.touches ? event.touches[0].clientX : event.clientX;
  const y = event.touches ? event.touches[0].clientY : event.clientY;

  for (let i = 0; i < 5; i++) {
    const h = document.createElement("div");
    h.className = "heart-pop";
    h.innerHTML = ["❤️","💖","💘"][Math.floor(Math.random()*3)];
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.setProperty("--x", (Math.random()*60-30)+"px");
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1500);
  }
}

function showLove() {
  const popup = document.getElementById("sweetPopup");
  const text = document.getElementById("typingText");
  popup.style.display = "flex";
  text.innerHTML = "";

  const msg = "I Love You ❤️ More than chocolate 💕";
  let i = 0;

  const type = setInterval(()=>{
    if(i < msg.length){
      text.innerHTML += msg[i++];
    } else clearInterval(type);
  },80);

  for(let j=0;j<18;j++){
    const h=document.createElement("div");
    h.className="flash-heart";
    h.innerHTML=["❤️","💖","💘","💕"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"vw";
    h.style.top=Math.random()*100+"vh";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),2000);
  }

  setTimeout(()=>popup.style.display="none",4000);
}
function showLove() {
  document.getElementById("sweetPopup").style.display = "block";

  setTimeout(() => {
    document.getElementById("sweetPopup").style.display = "none";
    document.getElementById("kissPopup").style.display = "block";
  }, 2500);
}