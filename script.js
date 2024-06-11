
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
            window.location.href = '/Birthday_ig/gift';
        }, 3000);
      
    }

    // Add event listener to the cake
    cake.addEventListener('click', blowOutCandles);
    
});

