let menyu=document.getElementById("menyu");
let close=document.getElementById("close");
let headerMobil=document.getElementById("mobil")
function menyuButton(){
   menyu.style.display='none';
   close.style.display='block';
   headerMobil.style.display='block'
}

function closeButton(){
   menyu.style.display='block';
   close.style.display='none';
   headerMobil.style.display='none'
}