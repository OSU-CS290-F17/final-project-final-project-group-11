
   
window.addEventListener('DOMContentLoaded', function () {
  
  var driver = document.getElementById('driver');
  driver.classList.add("selected");
  var passenger = document.getElementById('passenger');
  var driverDiv= document.getElementById('driverDiv');
  var passengerDiv= document.getElementById('passengerDiv');
   passengerDiv.style.display= "none";
   
  passenger.addEventListener('click',function(){
  passenger.classList.add("selected");
  driver.classList.remove("selected");
  driverDiv.style.display= "none";
  passengerDiv.style.display= "block"; 
  });
  
  driver.addEventListener('click',function(){
    this.classList.add("selected");
  passenger.classList.remove("selected");
   driverDiv.style.display= "block";
  passengerDiv.style.display= "none";
 
  });
  
  });
  