function logouncover(){
  document.getElementById('cover-right').classList.toggle('logo-uncover-right');
  document.getElementById('cover-left').classList.toggle('logo-uncover-left');
  setTimeout(()=>{document.getElementById('logoscreen').remove()},3000);
}

function scrolling(){
  var elem = document.getElementsByClassName('purpose-photo')[0];
  if (coming(elem) > 0 ) {
    if (elem.classList.contains('purpose-photo-below')){
      elem.classList.toggle('purpose-photo-below')
    }
  } else {
    if (!elem.classList.contains('purpose-photo-below')){
      elem.classList.toggle('purpose-photo-below')
    }
  }
}

function coming(ele){
  // Given an element this function returns zero or lower if the element is still below, and a number above zero if the element is coming into sight from the bottom, centered at 1/2 of the page
  var y = window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,
  center = y/2,
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
