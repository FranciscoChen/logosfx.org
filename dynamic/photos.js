function photoexpand(){
  const elements = document.getElementsByClassName('photo-wrap')
  var elelen = elements.length
  for (var i = 0; i < elelen; i++){
    elements[i].onclick = function(evt){
      evt.target.classList.toggle("expandedphoto");
    }
  }
}
