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

const photos = document.getElementsByClassName('photo')
var nphoto = 0
function scrolling(){
  if (atbottom() > 0) {
    for (var i = 0; i<12 ;i++){
      setTimeout( ()=> {
        nphoto++;
        const photo = photos[nphoto];
        if (typeof photo !== 'undefined'){
          if (!photo.classList.contains('photo-display')){
            photo.classList.toggle('photo-display')
          }
        }
      },i*200)
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
