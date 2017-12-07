

var bookButtons = document.getElementsByClassName('car-action-button');
for (var i = 0; i < bookButtons.length; i++) {
  bookButtons[i].addEventListener('click', handleAddWordButtonClick);
}




function handleAddWordButtonClick() {

  //var showSomethingModal = document.getElementById('sell-something-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  //showSomethingModal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}
