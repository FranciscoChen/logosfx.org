function photoexpand(){
  var modal = document.getElementById("myModal");
  const elements = document.getElementsByClassName('photo-wrap')
  var elelen = elements.length
  for (var i = 0; i < elelen; i++){
    elements[i].onclick = function(evt) {
      document.getElementById('modal-photo').src = evt.target.src
      modal.style.display = "block";
    }
  }
}
