var allPostElems = [];
var count;

window.addEventListener('DOMContentLoaded', function () {

  /*
   * Remember all of the initial post elements initially displayed in the page.
   */
  var postElems = document.getElementsByClassName('post');
  for (var i = 0; i < postElems.length; i++) {
    allPostElems.push(postElems[i]);
  }




OpenReserve();
document.getElementById("modal-close2").onclick = function() {CloseReserve()};
document.getElementById("modal-accept2").onclick = function() {AcceptReserve()};
document.getElementById("modal-cancel2").onclick = function() {CancelReserve()};

document.getElementById("sell-something-button").onclick = function() {Openfilter()};
document.getElementById("modal-close").onclick = function() {Closefilter()};
document.getElementById("modal-accept").onclick = function() {Acceptfilter()};
document.getElementById("modal-cancel").onclick = function() {Cancelfilter()};

});

/*--------------------------------------------------------------------------------------*/


 
function handleAddWordButtonClick() {
  var showSomethingModal = document.getElementById('book-a-car');
  var showBlackBlack = document.getElementById('modal-backdrop');  
  showSomethingModal.style.display = "flex";  
  showBlackBlack.style.display = "flex"; 
}


function OpenReserve() {
	
	var bookButtons = document.getElementsByClassName('car-action-button');
	for (var i = 0; i < bookButtons.length; i++) {
	bookButtons[i].addEventListener('click', handleAddWordButtonClick);	
	}
	count = i;
	}
/*--------------------------------------------------------------------------------------*/
function CloseReserve() {
	document.getElementById("book-a-car").style.display = "none";
	document.getElementById("modal-backdrop").style.display = "none";
	
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
	
	
	
	
	document.getElementById("book-a-car").style.display = "none";
	document.getElementById("modal-backdrop").style.display = "none";		
	document.getElementById("book-passenger-name").value = null;
	document.getElementById("book-pick-up-location").value = null;
	document.getElementById("book-destination").value = null;
		
	}
/*--------------------------------------------------------------------------------------*/
function CancelReserve() {
	document.getElementById("book-a-car").style.display = "none";
	document.getElementById("modal-backdrop").style.display = "none";
	
	document.getElementById("book-passenger-name").value = null;
	document.getElementById("book-pick-up-location").value = null;
	document.getElementById("book-destination").value = null;
	}
/*--------------------------------------------------------------------------------------*/
function Closefilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";	
	
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
    var postPassenger = Number(postElem.getAttribute('data-passenger'));
    var filterPassenger = Number(filters.passenger);	
    if (postPassenger != filterPassenger) {
      return false;
    
    }
  } 
  return true;

}

/*--------------------------------------------------------------------------------------*/
function Acceptfilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";		
	
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
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";
	document.getElementById("filter-min-price").value = null;
	document.getElementById("filter-max-price").value = null;
	document.getElementById("filter-max-passengers").value = null;
	}
/*--------------------------------------------------------------------------------------*/
function Openfilter() {	
	document.getElementById("modal-backdrop").style.display = "flex";
	document.getElementById("filter-modal").style.display = "flex";	
	document.getElementById("filter-min-price").value = null;
	document.getElementById("filter-max-price").value = null;
	document.getElementById("filter-max-passengers").value = null;
	}