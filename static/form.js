function forminit(){
  document.getElementById("submit").onclick = function(){
	  submitForm(document.getElementById("apply-form"))
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
  xhr.send(formData);
}

function displaysuccessmessage(content){
  const notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  notification.innerHTML = '<p>'+content+'</p>'
  document.getElementById("main-wrap")[0].appendChild(notification);
  setTimeout(
    function() {
      document.getElementById("notification").remove()
    }, 1000
  );
}
