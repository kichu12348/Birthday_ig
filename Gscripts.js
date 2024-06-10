
const audio = new Audio("./audio/bRolls.wav");
audio.preload = "auto";
  



  document.addEventListener("DOMContentLoaded", () => {
  const giftBox = document.getElementById("giftBox");
  const popup = document.getElementById("popup");
  const lid = document.getElementById("lid");
  const box = document.querySelector(".box");
  const popUpContent = document.getElementById("popUpContent");
  
  let bool = true;

  console.log("what ? 🤨");

  const functuous = () => {
   if(bool){
    lid.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
    lid.style.animation = "lidOpen 1s forwards";
    giftBox.style.animation = "slideDown 1s forwards";
    popUpContent.style.animation = "slideUp 1s forwards";
    popup.style.display = "block";
    setTimeout(() => {
      if (bool) {
        audio.play();
        bool = false;
      }
    }, 200);

    box.removeEventListener("click", functuous);
    lid.removeEventListener("click", functuous);
   }
  }

  box.addEventListener("click", functuous);
  lid.addEventListener("click", functuous);
});
