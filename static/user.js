// xhr to see if user is logged in, modify login button accordingly
function user() {
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/loggedin", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '1') {
        const btn = document.getElementsByClassName("site-buttons")[0].firstChild;
        btn.innerText = '主页'
        btn.href = '/home'
      }
    }
  }
}
