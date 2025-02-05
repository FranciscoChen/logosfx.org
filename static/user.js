// xhr to see if user is logged in, modify login button accordingly
function user() {
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/loggedin", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
        const btn = document.getElementsByClassName("site-buttons")[0].firstChild;
      if (this.responseText === '1') {
        btn.innerText = '主页'
        btn.href = '/home'
        btn.classList.add('opaque')
      } else {
        if (new URL(window.location.href).pathname === '/home') {
          btn.innerText = '注销'
          btn.href = '/logout'
          btn.classList.add('opaque')
	} else {
          btn.innerText = '登录'
          btn.href = '/login'
          btn.classList.add('opaque')
	}
      }
    }
  }
}
