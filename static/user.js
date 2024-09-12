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
        const auth = document.getElementById("authenticated")
      if (this.responseText === '1') {
        btn.innerText = '主页'
        btn.href = '/home'
        btn.classList.add('opaque')
        if (auth !== null) auth.classList.remove('not-visible');
      } else {
        btn.innerText = '登录'
        btn.href = '/login'
        btn.classList.add('opaque')
        if (auth !== null) {
	  auth.innerHTML = '<h1>请先登录</h1>';
	  auth.classList.remove('not-visible');
	}
      }
    }
  }
}
