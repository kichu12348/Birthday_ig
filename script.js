// script.js
const giftBox=`
<div class="gift-box" id="giftBox">
            <div class="lid" id="lid">
                <img src="ribbon.svg" class="ribbon" alt="hi">
                <div class="lid-Ribbon"></div>
            </div>
            <div class="box">
            <div class="ribbon-vertical"></div>
            <div class="ribbon-horizontal"></div>
            </div>
            <div class="cover"></div>
        </div>
        <div class="popup" id="popup">
            <div class="popup-content" id="popUpContent">
                <h1>Happy Birthday!</h1>
                <p>Wishing you a day filled with happiness and a year filled with joy. Happy birthday!😃</p>
                <div class="collage">
                    <img src="images/pic1.jpg" alt="Pic 1" class="popupImg img1">
                    <img src="images/pic2.jpg" alt="Pic 2" class="popupImg img2">
                    <img src="images/pic3.jpg" alt="Pic 3" class="popupImg img3">
                    <img src="images/pic4.jpg" alt="Pic 4" class="popupImg img4">
                    <img src="images/pic5.jpg" alt="Pic 5" class="popupImg img5">
                </div>
            </div>
</div>
`








window.addEventListener('DOMContentLoaded', () => {
    const cake = document.getElementById('cake');
    const candles = document.querySelectorAll('.flame');
    const conatiner = document.querySelector('.container');
    const heading = document.querySelector('h1');
    

    // Function to blow out the candles
    function blowOutCandles() {
        for(let i=0;i<candles.length;i++) {
         if(i===0){
            candles[i].style.animation = 'blowOut 1s forwards';
          
         }
         else{
            setTimeout(() => {
                candles[i].style.animation = 'blowOut 1s forwards';
             }, i*500);
         }  
        }

        setTimeout(() => {
            window.location.href = '/gift.html';
        }, 3000);
      
    }

    // Add event listener to the cake
    cake.addEventListener('click', blowOutCandles);
    
});

