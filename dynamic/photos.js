function photoexpand(){
  var modal = document.getElementById("myModal");
  const elements = document.getElementsByClassName('photo-wrap')
  var elelen = elements.length
  modal.onclick = function() {
    modal.classList.toggle('modal-display')
  }
  for (var i = 0; i < elelen; i++){
    elements[i].onclick = function(evt) {
      document.getElementById('modal-photo').src = evt.target.src
      modal.classList.toggle('modal-display')
    }
  }
}
