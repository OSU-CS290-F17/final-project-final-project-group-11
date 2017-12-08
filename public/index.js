var allPostElems = [];
var count ;
var temp  ;
var thisRide;


window.addEventListener('DOMContentLoaded', function () {

  /*
   * Remember all of the initial post elements initially displayed in the page.
   */
  var postElems = document.getElementsByClassName('post');
  for (var i = 0; i < postElems.length; i++) {
    allPostElems.push(postElems[i]);
  }




OpenReserve();
document.getElementById("model-close2").onclick = function() {CloseReserve()};
document.getElementById("model-accept2").onclick = function() {AcceptReserve()};
document.getElementById("model-cancel2").onclick = function() {CancelReserve()};

document.getElementById("filter-button").onclick = function() {Openfilter()};
document.getElementById("model-close").onclick = function() {Closefilter()};
document.getElementById("model-accept").onclick = function() {Acceptfilter()};
document.getElementById("model-cancel").onclick = function() {Cancelfilter()};

});

/*--------------------------------------------------------------------------------------*/



/*


function OpenReserve() {
	
	var bookButtons = document.getElementsByClassName('car-action-button');
	//infinity loop
	for (var i = 0; i < bookButtons.length; i++) {
		
	bookButtons[i].addEventListener("click", function(){

    var showSomethingmodel = document.getElementById('book-a-car');
	var showBlackBlack = document.getElementById('model-backdrop');  
	showSomethingmodel.style.display = "flex";  
	showBlackBlack.style.display = "flex"; 
	
	
	});	
	
	}	
	
	}



*/
function OpenReserve() {
	
	var bookButtons = document.getElementsByClassName('car-action-button');
	//infinity loop
	for (var i = 0; i < bookButtons.length; i++) {
		
	bookButtons[i].addEventListener("click", thisOne);
	
	}	
	
	}


function thisOne(event){
    var showSomethingmodel = document.getElementById('book-a-car');
	var showBlackBlack = document.getElementById('model-backdrop');  
	showSomethingmodel.style.display = "flex";  
	showBlackBlack.style.display = "flex"; 
	thisRide = event.currentTarget;
	var why;
	why = thisRide.getAttribute("name");
    console.log(why);
	var idk = document.getElementById('book-DriverName');
	idk.value = why;
	//console.log("getAttribute:", Name_ride);


}
	
/*--------------------------------------------------------------------------------------*/
function CloseReserve() {
	document.getElementById("book-a-car").style.display = "none";
	document.getElementById("model-backdrop").style.display = "none";
	
	document.getElementById("book-passenger-name").value = null;
	document.getElementById("book-pick-up-location").value = null;
	document.getElementById("book-destination").value = null;
	}
/*--------------------------------------------------------------------------------------*/
function AcceptReserve() {
	
	var passenger = document.getElementById("book-passenger-name").value;
	var location = document.getElementById("book-pick-up-location").value;
	var destination = document.getElementById("book-destination").value;
	
	submitOK = "true";

	if(passenger==""){
			alert("Please enter passenger");
			submitOK = "false";
	}

	if(location==""){
			alert("Please enter location");
			submitOK = "false";
	}

		
	if(destination==""){
			alert("Please enter destination");
			submitOK = "false";
	}
	if (submitOK == "false") {
			return false;
		}
	
	/*
	var postContainer = document.getElementById('posts');  
    postContainer.removeChild(postContainer.lastChild);
	postContainer.removeChild(postContainer.lastChild);
	*/
	
	
	document.getElementById("book-a-car").style.display = "none";
	document.getElementById("model-backdrop").style.display = "none";		
	document.getElementById("book-passenger-name").value = null;
	document.getElementById("book-pick-up-location").value = null;
	document.getElementById("book-destination").value = null;
		
	}
/*--------------------------------------------------------------------------------------*/
function CancelReserve() {
	document.getElementById("book-a-car").style.display = "none";
	document.getElementById("model-backdrop").style.display = "none";
	
	document.getElementById("book-passenger-name").value = null;
	document.getElementById("book-pick-up-location").value = null;
	document.getElementById("book-destination").value = null;
	}
/*--------------------------------------------------------------------------------------*/
function Closefilter() {
	document.getElementById("model-backdrop").style.display = "none";
	document.getElementById("filter-model").style.display = "none";	
	
	document.getElementById("filter-min-price").value = null;
	document.getElementById("filter-max-price").value = null;
	document.getElementById("filter-max-passengers").value = null;
	}
/*--------------------------------------------------------------------------------------*/

function postPassesFilters(postElem, filters) {


  if (filters.minPrice) {
    var postPrice = Number(postElem.getAttribute('data-price'));
    var filterMinPrice = Number(filters.minPrice);
    if (postPrice < filterMinPrice) {
      return false;
    }
  }

  if (filters.maxPrice) {
    var postPrice = Number(postElem.getAttribute('data-price'));
    var filterMaxPrice = Number(filters.maxPrice);
    if (postPrice > filterMaxPrice) {
      return false;
    }
  }

  if (filters.passenger) {
    var postPassenger = Number(postElem.getAttribute('data-maxSeats'));
    var filterPassenger = Number(filters.passenger);	
    if (postPassenger < filterPassenger) {
      return false;
    
    }
  } 
  return true;

}

/*--------------------------------------------------------------------------------------*/
function Acceptfilter() {
	document.getElementById("model-backdrop").style.display = "none";
	document.getElementById("filter-model").style.display = "none";		
	
	var filters = {    
    minPrice: document.getElementById('filter-min-price').value,
    maxPrice: document.getElementById('filter-max-price').value,
    passenger: document.getElementById('filter-max-passengers').value    
  }
  
  /*
   * Remove all "post" elements from the DOM.
   */
  var postContainer = document.getElementById('posts');
  while(postContainer.lastChild) {
    postContainer.removeChild(postContainer.lastChild);
  }

  /*
   * Loop through the collection of all "post" elements and re-insert ones
   * that meet the current filtering criteria.
   */
  allPostElems.forEach(function (postElem) {
    if (postPassesFilters(postElem, filters)) {
      postContainer.appendChild(postElem);
    }
  });
	document.getElementById("filter-min-price").value = null;
	document.getElementById("filter-max-price").value = null;
	document.getElementById("filter-max-passengers").value = null;	
	}
/*--------------------------------------------------------------------------------------*/
function Cancelfilter() {
	document.getElementById("model-backdrop").style.display = "none";
	document.getElementById("filter-model").style.display = "none";
	document.getElementById("filter-min-price").value = null;
	document.getElementById("filter-max-price").value = null;
	document.getElementById("filter-max-passengers").value = null;
	}
/*--------------------------------------------------------------------------------------*/
function Openfilter() {	
	document.getElementById("model-backdrop").style.display = "flex";
	document.getElementById("filter-model").style.display = "flex";	
	document.getElementById("filter-min-price").value = null;
	document.getElementById("filter-max-price").value = null;
	document.getElementById("filter-max-passengers").value = null;
	}