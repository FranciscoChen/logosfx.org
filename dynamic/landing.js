function logouncover(){
  document.getElementById('cover-right').classList.toggle('logo-uncover-right');
  document.getElementById('cover-left').classList.toggle('logo-uncover-left');
  setTimeout(()=>{document.getElementById('logoscreen').remove()},3000);
}

function scrolling(){
  var purpose = document.getElementsByClassName('purpose-photo')[0];
  if (coming(purpose) > 0 ) {
    if (purpose.classList.contains('purpose-photo-below')){
      purpose.classList.toggle('purpose-photo-below')
    }
  } else {
    if (!purpose.classList.contains('purpose-photo-below')){
      purpose.classList.toggle('purpose-photo-below')
    }
  }
  var teachers = document.getElementsByClassName('teachers-photo')[0];
  if (coming(teachers) > 0 ) {
    if (teachers.classList.contains('teachers-photo-below')){
      teachers.classList.toggle('teachers-photo-below')
    }
  } else {
    if (!teachers.classList.contains('teachers-photo-below')){
      teachers.classList.toggle('teachers-photo-below')
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
