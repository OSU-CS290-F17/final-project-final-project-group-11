window.addEventListener('DOMContentLoaded', function () {
  
  var driver = document.getElementById('driver');
  driver.classList.add("selected");
  var passenger = document.getElementById('passenger');
  var driverDiv= document.getElementById('driverDiv');
  var passengerDiv= document.getElementById('passengerDiv');
   passengerDiv.style.display= "none";
  var driverButton=document.getElementById('update-button');
  var passengerButton=document.getElementById('search-button');
  
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
  
  driverButton.addEventListener('click',function(){
    var newUrl="http://localhost:3000/results";
    document.location.href = newUrl;
  });
  
   passengerButton.addEventListener('click',function(){
     var newUrl="http://localhost:3000/results";
    document.location.href = newUrl;
  });
  
  });