let count = 0;
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let showNumber = document.getElementById("showNumber");


function decrement(){
 count--;
 showNumber.innerHTML = count;
}

function increment(){
    count++;
    showNumber.innerHTML = count;
   
   }
      
minus.addEventListener("click", decrement);

plus.addEventListener("click", increment);


 alert("Thank you sensei Chan! One day you'll be proud of me!")
