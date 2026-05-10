let countElement = document.getElementById("count");
let countValue = 0 ;


function Increase(){
    if( countValue < 20){
        countValue++;
    }

   countElement.innerText = countValue;
}

function Decrease(){
   if( countValue > -20){
    countValue--;
   }
    
    countElement.innerText = countValue;
}

function Reset(){
 
    countValue = 0;
    countElement.innerText = countValue;

}
