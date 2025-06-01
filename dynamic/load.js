window.onload = () => {
  if (typeof user === 'function'){
    user()
  }
  if (typeof landing === 'function'){
    landing()
  }
  if (typeof home === 'function'){
    home()
  }
  if (typeof pwcomplexity === 'function'){
    pwcomplexity()
  }
  if (typeof addsection === 'function'){
    addsection()
  }
  if (typeof getform === 'function'){
    getform()
  }
  if (typeof forminit === 'function'){
    forminit()
  }
  if (typeof scrolling === 'function') {
    scrolling();
  }
  if (typeof menuexpand === 'function') {
    menuexpand(document.getElementsByClassName("menu-item-expand"));
    menuexpand(document.getElementsByClassName("column-expand"));
  }
}

function unblurElements(elementArray){
  const length = elementArray.length
  if (length > 0){
    for (var i = 0; i < length; i++){
      elementArray[i].classList.add('unblur');
    }
  }
}
function unblur(){
  if (document.fonts.check("12px FZKai") === true) {
    unblurElements(document.getElementsByTagName('h1'))
    unblurElements(document.getElementsByTagName('h2'))
    unblurElements(document.getElementsByTagName('h3'))
    unblurElements(document.getElementsByTagName('h1'))
    unblurElements(document.getElementsByClassName('headings-font'))
    clearInterval(unblurInterval)
  }
}
var unblurInterval = setInterval(unblur,100);

function menuexpand(elements){
  var elelen = elements.length
  for (var i = 0; i < elelen; i++){
    elements[i].onclick = function(evt){
      evt.target.classList.toggle("expanded");
      evt.target.parentElement.parentElement.nextElementSibling.classList.toggle("visible");
    }
  }
}
