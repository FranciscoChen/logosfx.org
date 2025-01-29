function forminit(){
  document.getElementById("submit").onclick = function(){
	  submitForm(document.getElementById("apply-form").action)
  };
}

function submitForm(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST",url); 
  var formData = new FormData(document.getElementById("apply-form")); 
  var querystring = new URLSearchParams(formData).toString()
  xhr.send(querystring);
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      displaysuccessmessage('信息保存成功');
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
