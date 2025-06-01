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
  var fellowship1 = document.getElementsByClassName('fellowship1-photo')[0];
  if (coming(fellowship1) > 0 ) {
    if (fellowship1.classList.contains('fellowship1-photo-below')){
      fellowship1.classList.toggle('fellowship1-photo-below')
    }
  } else {
    if (!fellowship1.classList.contains('fellowship1-photo-below')){
      fellowship1.classList.toggle('fellowship1-photo-below')
    }
  }
  var fellowship2 = document.getElementsByClassName('fellowship2-photo')[0];
  if (coming(fellowship2) > 0 ) {
    if (fellowship2.classList.contains('fellowship2-photo-below')){
      fellowship2.classList.toggle('fellowship2-photo-below')
    }
  } else {
    if (!fellowship2.classList.contains('fellowship2-photo-below')){
      fellowship2.classList.toggle('fellowship2-photo-below')
    }
  }
  var fellowship3 = document.getElementsByClassName('fellowship3-photo')[0];
  if (coming(fellowship3) > 0 ) {
    if (fellowship3.classList.contains('fellowship3-photo-below')){
      fellowship3.classList.toggle('fellowship3-photo-below')
    }
  } else {
    if (!fellowship3.classList.contains('fellowship3-photo-below')){
      fellowship3.classList.toggle('fellowship3-photo-below')
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
