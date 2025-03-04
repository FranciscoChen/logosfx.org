function logouncover(){
  document.getElementById('cover-right').classList.toggle('logo-uncover-right');
  document.getElementById('cover-left').classList.toggle('logo-uncover-left');
  setTimeout(()=>{document.getElementById('logoscreen').remove()},3000);
}
