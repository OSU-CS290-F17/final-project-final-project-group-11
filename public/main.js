
   
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
  /* for (var i = 0; i < postElems.length; i++) {
    allPosts.push(parsePostElem(postElems[i]));
  } */

  /*
   * Grab all of the city names already in the filter dropdown.
   */
/*   var filterCitySelect = document.getElementById('filter-city');
  if (filterCitySelect) {
    var filterCityOptions = filterCitySelect.querySelectorAll('option:not([selected])');
    for (var i = 0; i < filterCityOptions.length; i++) {
      allCities.push(filterCityOptions[i].value.trim().toLowerCase());
    }
  }

  var sellSomethingButton = document.getElementById('sell-something-button');
  if (sellSomethingButton) {
    sellSomethingButton.addEventListener('click', showSellSomethingModal);
  }

  var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var modalHideButtons = document.getElementsByClassName('modal-hide-button');
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideSellSomethingModal);
  }

  var filterUpdateButton = document.getElementById('filter-update-button');
  if (filterUpdateButton) {
    filterUpdateButton.addEventListener('click', doFilterUpdate)
  }
 */


