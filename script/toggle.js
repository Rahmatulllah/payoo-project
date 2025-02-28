

document.getElementById('cash-out').style.display = "none";

document.getElementById('addmoney-box').addEventListener('click',function(){
   document.getElementById('cash-out').style.display = "none";
   document.getElementById('add-money').style.display = "block";
})

document.getElementById('cashout-box').addEventListener('click',function(){
   document.getElementById('cash-out').style.display = "block";
   document.getElementById('add-money').style.display = "none";
})