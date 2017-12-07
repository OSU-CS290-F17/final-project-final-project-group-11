
document.getElementById("book-car-button").addEventListener('click',OpenReserve);
document.getElementById("modal-close2").onclick = function() {CloseReserve()};
document.getElementById("modal-accept2").onclick = function() {AcceptReserve()};
document.getElementById("modal-cancel2").onclick = function() {CancelReserve()};

document.getElementById("sell-something-button").onclick = function() {Openfilter()};
document.getElementById("modal-close").onclick = function() {Closefilter()};
document.getElementById("modal-accept").onclick = function() {Acceptfilter()};
document.getElementById("modal-cancel").onclick = function() {Cancelfilter()};



function OpenReserve() {
	document.getElementById("book-a-car").style.display = "flex";	
	}

function CloseReserve() {
	document.getElementById("book-a-car").style.display = "none";
	}
	
function AcceptReserve() {
	document.getElementById("book-a-car").style.display = "none";
	}

function CancelReserve() {
	document.getElementById("book-a-car").style.display = "none";
	}
	
	
function Closefilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";	
	}
function Acceptfilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";
	}
function Cancelfilter() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";
	}

function Openfilter() {	
	document.getElementById("modal-backdrop").style.display = "flex";
	document.getElementById("filter-modal").style.display = "flex";
	
	}	



