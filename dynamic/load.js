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
  if (typeof logouncover === 'function'){
    logouncover()
  }
  if (typeof scrolling === 'function') {
    scrolling();
  }
  if (typeof menuexpand === 'function') {
    menuexpand(document.getElementsByClassName("menu-item-expand"));
    menuexpand(document.getElementsByClassName("column-expand"));
  }
}

function uncover(){
  if (document.fonts.check("12px FZKai") === true && document.getElementById('cover').classList.contains('uncover') === false && !document.getElementById('logoscreen')) {
    document.getElementById('cover').classList.add('uncover');
    clearInterval(uncoverInterval)
  }
}
var uncoverInterval = setInterval(uncover,200);

function menuexpand(elements){
  var elelen = elements.length
  for (var i = 0; i < elelen; i++){
    elements[i].onclick = function(evt){
      evt.target.classList.toggle("expanded");
      evt.target.parentElement.parentElement.nextElementSibling.classList.toggle("visible");
    }
  }
}
