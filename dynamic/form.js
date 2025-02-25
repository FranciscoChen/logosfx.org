function forminit(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/loggedin", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '1') {
        document.getElementById("submit").onclick = function(){
          if (document.getElementById("submit").hasAttribute("disabled") === false) {
            submitForm(document.getElementById("apply-form").action)
          }
        };
      } else {
        var e = document.getElementById("submit")
        var d = document.createElement('button');
        d.innerHTML = e.innerHTML;
        d.classList = e.classList;
        e.parentNode.replaceChild(d, e);
      }
    }
  }
}

function submitForm(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST",url); 
  xhr.withCredentials = true;
  var formData = new FormData(document.getElementById("apply-form")); 
  if (formData.get('photo') !== null) {
    xhr.send(document.getElementById("form-photo").files[0])
  } else {
    var querystring = new URLSearchParams(formData).toString()
    xhr.send(querystring);
  }
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      displaysuccessmessage('信息保存成功');
    }
    if (this.status == 403) {
      displaysuccessmessage('无法更改此信息');
    }
  }
}

function displaysuccessmessage(content){
  const notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  notification.setAttribute("class", "notification");
  notification.innerHTML = '<p class="notification-content">'+content+'</p>'
  document.getElementById("main-wrap").appendChild(notification);
  setTimeout(
    function() {
      document.getElementById("notification").classList.add('notification-in')
    }, 100
  );
  setTimeout(
    function() {
      document.getElementById("notification").classList.add('notification-out')
      document.getElementById("notification").classList.remove('notification-in')
    }, 1000
  );
  setTimeout(
    function() {
      document.getElementById("notification").remove()
    }, 1400
  );
}
