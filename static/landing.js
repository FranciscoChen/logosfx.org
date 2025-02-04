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
function uncover(){
  if (document.fonts.check("12px FZKai") === true && document.getElementById('cover').classList.contains('uncover') === false) {
    document.getElementById('cover').classList.add('uncover');
    clearInterval(uncoverInterval)
  }
}
var uncoverInterval = setInterval(uncover,500)
