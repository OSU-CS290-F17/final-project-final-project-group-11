window.addEventListener('DOMContentLoaded', function () {
  
  //var driver = document.getElementById('driver');
  driver.classList.add("selected");
  //var passenger = document.getElementById('passenger');
  var driverDiv= document.getElementById('driverDiv');
  var passengerDiv= document.getElementById('passengerDiv');
   passengerDiv.style.display= "none";
  var driverButton=document.getElementById('update-button');
  var passengerButton=document.getElementById('search-button');


  var ft = document.getElementById('filter-text').value;
  var fmp = document.getElementById('filter-min-price').value;
  var fmc = document.getElementById('filter-min-car').value;
  var fml = document.getElementById('filter-min-license').value;
  var fmm = document.getElementById('filter-min-max').value;

  var fp = document.getElementById('filter-Pname').value;
  var fpr = document.getElementById('filter-price').value;
  var fpas = document.getElementById('filter-passengerNo').value;
 
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
    if(ft == "" || fmp == "" || fmc == "" || fml == "" || fmm == ""){
      alert("Please enter all the information.");
    }else{
      var newUrl="http://localhost:3000/results";
      document.location.href = newUrl;
    }
    
  });
  
    
  });