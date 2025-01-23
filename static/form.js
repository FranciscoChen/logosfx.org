function forminit(){
  document.getElementById("submit").onclick = function(){
	  submitForm(document.getElementById("apply-form").action)
  };
}

function submitForm(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST",url); 
  xhr.onload = function(event){
    if (xhr.status == 200) {
      displaysuccessmessage('信息保存成功');
    }
  }; 
  var formData = new FormData(document.getElementById("apply-form")); 
  var querystring = new URLSearchParams(formData).toString()
  xhr.send(querystring);
}

function displaysuccessmessage(content){
  const notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  notification.setAttribute("class", "notification");
  notification.innerHTML = '<p class="notification-content">'+content+'</p>'
  document.getElementById("main-wrap").appendChild(notification);
  document.getElementById("notification").classList.add('notification-in')
  setTimeout(
    function() {
      document.getElementById("notification").classList.remove('notification-in')
      document.getElementById("notification").classList.add('notification-out')
    }, 1000
  );
  setTimeout(
    function() {
      document.getElementById("notification").remove()
    }, 1400
  );
}
