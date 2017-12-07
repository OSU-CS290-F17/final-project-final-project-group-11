document.getElementById("book-car-button").onclick = function() {OpenReserve()};
document.getElementById("modal-close2").onclick = function() {CloseReserve()};
document.getElementById("modal-accept2").onclick = function() {AcceptReserve()};
document.getElementById("modal-cancel2").onclick = function() {CancelReserve()};

document.getElementById("sell-something-button").onclick = function() {Openfilter()};
document.getElementById("modal-close").onclick = function() {Closefilter()};
document.getElementById("modal-accept").onclick = function() {Acceptfilter()};
document.getElementById("modal-cancel").onclick = function() {Cancelfilter()};

/*--------------------------------------------------------------------------------------*/
var count;


function handleAddWordButtonClick() {
  var showSomethingModal = document.getElementById('book-a-car');	
  showSomethingModal.style.display = "flex";  
}


function OpenReserve() {
	
	var bookButtons = document.getElementsByClassName('car-action-button');
	for (var i = 0; i < bookButtons.length; i++) {
	bookButtons[i].addEventListener('click', handleAddWordButtonClick);	
	}
	
	}
/*--------------------------------------------------------------------------------------*/
function CloseReserve() {
	document.getElementById("book-a-car").style.display = "none";
	}
/*--------------------------------------------------------------------------------------*/
function AcceptReserve() {
	document.getElementById("book-a-car").style.display = "none";
	}
/*--------------------------------------------------------------------------------------*/
function CancelReserve() {
	document.getElementById("book-a-car").style.display = "none";
	}
/*--------------------------------------------------------------------------------------*/
function Closefilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";	
	}
/*--------------------------------------------------------------------------------------*/
function Acceptfilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";	
	
	
	
	var filters = {    
    minPrice: document.getElementById('filter-min-price').value,
    maxPrice: document.getElementById('filter-max-price').value,
    passengers: document.getElementById('filter-max-passengers').value    
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

	
	
	
	
	
	
	
	}
/*--------------------------------------------------------------------------------------*/
function Cancelfilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";
	}
/*--------------------------------------------------------------------------------------*/
function Openfilter() {	
	document.getElementById("modal-backdrop").style.display = "flex";
	document.getElementById("filter-modal").style.display = "flex";	
	}	




