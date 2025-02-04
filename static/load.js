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
  if (typeof logo === 'function'){
    logo()
  }
}
function uncover(){
  if (document.fonts.check("12px FZKai") === true && document.getElementById('cover').classList.contains('uncover') === false && !document.getElementById('logoscreen')) {
    document.getElementById('cover').classList.add('uncover');
    clearInterval(uncoverInterval)
  }
}
var uncoverInterval = setInterval(uncover,200)
