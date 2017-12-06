


document.getElementById("book-car-button").onclick = function() {open()};


document.getElementById("sell-something-button").onclick = function() {openfilter()};
document.getElementById("modal-close").onclick = function() {close()};
document.getElementById("modal-accept").onclick = function() {accept()};
document.getElementById("modal-cancel").onclick = function() {cancel()};



function open() {
	document.getElementById("book-a-car").style.display = "flex";	
	}

function close() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";	
	}
function accept() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";
	}
function cancel() {
	document.getElementById("modal-backdrop").style.display = "none";
	document.getElementById("filter-modal").style.display = "none";
	}

function openfilter() {	
	document.getElementById("modal-backdrop").style.display = "flex";
	document.getElementById("filter-modal").style.display = "flex";
	
	}	