function checkNum() {
   let num = Number(document.getElementById("num").value);
   let evenOdd;
   let signCheck;


   if(isNaN(num))
   {
     document.getElementById("result").innerText = "Please enter a valid number !!";
      return;
   }
   else {
      if ( num % 2 === 0)
      {
      evenOdd = "It is even";
       }
       else {
               evenOdd = "It is odd"
            }
  
   
             if ( num > 0 )
            {
      signCheck = "and positive";
            }
   else if ( num < 0 ) 
   {
      signCheck = "and negative";
   }
   else 
   {
     document.getElementById("result").innerText = "It is zero";
     return;
   }
}
   document.getElementById("result").innerText = evenOdd + " " + signCheck ; 
}