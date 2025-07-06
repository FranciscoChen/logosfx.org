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

const photopart = document.getElementsByClassName('photo-part')
var ppart = 0
function scrolling(){
  if (atbottom > 0) {
    ppart++
    if (typeof photopart[ppart] !== 'undefined'){
      if (! photopart.classList.contains('photo-part-display')){
        photo.classList.toggle('photo-part-display')
      }
    }
  }
}

function atbottom(){
  // When the user is 200 px from the bottom, fire the event.
  if(window.scrollY + window.innerHeight + 200 > document.body.scrollHeight) {
    return 1
  } else {
    return 0
  }
}

var timeout;
window.onresize=function(){
  timeout&&window.clearTimeout(timeout),
  timeout=window.setTimeout(function(){
    scrolling()
  },16.6)
};

window.onscroll=function(){
  timeout&&window.clearTimeout(timeout),
  timeout=window.setTimeout(function(){
    scrolling()
  },16.6)
};
