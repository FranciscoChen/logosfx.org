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

function scrolling(){
  var photos = document.getElementsByClassName('photo');
  const photosl = photos.length
  for (var i = 0; i < photosl; i++){
    const photo = photos[i]
    if (coming(photo) > 0) {
      if (photo.classList.contains('photo-below')){
        photo.classList.toggle('photo-below')
      }
    } else {
      if (!photo.classList.contains('photo-below')){
        photo.classList.toggle('photo-below')
      }
    }
  }
}

function coming(ele){
  // Given an element this function returns zero or lower if the element is still below, and a number above zero if the element is coming into sight from the bottom, centered at 45% of the page
  var y = window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,
  center = 4.5*y/10,
  rect = ele.getBoundingClientRect(),
  topcenter = rect.top - center;
  if ( topcenter < 0 ) return 1 ;
  if ( (rect.bottom-center) > 0 ) return (center - topcenter ) / center ;
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
