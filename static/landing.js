// xhr to see if user is logged in, modify login button accordingly
function landing() {
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/loggedin", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const msg = document.getElementById("message");
      const btn = document.getElementById("action");
      if (this.responseText === '1') {
        msg.innerText = '欢迎回来'
        btn.innerText = '进入主页'
        btn.href = '/home'
      }
    }
  }
}
function logouncover(){
  document.getElementById('cover-right').classList.toggle('logo-uncover-right');
  document.getElementById('cover-left').classList.toggle('logo-uncover-left');
  setTimeout(()=>{document.getElementById('logoscreen').remove()},3000);
}
