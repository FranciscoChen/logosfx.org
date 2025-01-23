function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getapplyinfo", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        const ele = document.getElementsByName(name)[0]
        if (typeof ele !== 'undefined') {
          if (ele.type === 'checkbox') {
            ele.checked = {'true':1,'false':0}[data[name]];
          }
          if (ele.type === 'text' || ele.type === 'email') {
            ele.value = data[name]
          }
          if (ele.type === 'date') {
            ele.value = data[name].slice(0,4)+'-'+data[name].slice(5,7)+'-'+data[name].slice(8,10)
          }
          if (ele.type === 'radio') {
            const elearr = document.getElementsByName(name)
            const len = elearr.length
            for (var i = 0; i < len; i++){
              if (elearr[i].value === data[name]){
                elearr[i].checked = 1;
                break;
              }
            }
          }
        }
      }
    }
  }
}
function formcheck() {
    if (
            document.getElementById("form-surname").value.length > 0 &&
            document.getElementById("form-name").value.length > 0 && 
            (
                    document.getElementById("man").checked === true || 
                    document.getElementById("woman").checked === true 
            ) &&
            document.getElementById("form-birthdate").value.length > 0 && 
            document.getElementById("form-address").value.length > 0 && 
            document.getElementById("form-postalcode").value.length > 0 && 
            document.getElementById("form-phone").value.length > 0 && 
            document.getElementById("form-mobile").value.length > 0 && 
            document.getElementById("form-weixin").value.length > 0 && 
            document.getElementById("form-email").value.length > 0 
    ) {
        if (document.getElementsByClassName("submit")[0].className.indexOf("disabled") > -1) {
            document.getElementsByClassName("submit")[0].classList.toggle("disabled")
        }
        if (document.getElementsByClassName("submit")[0].hasAttribute("disabled") === true) {
            document.getElementsByClassName("submit")[0].removeAttribute("disabled")
        }
    } else {
        if (document.getElementsByClassName("submit")[0].className.indexOf("disabled") === -1) {
            document.getElementsByClassName("submit")[0].classList.toggle("disabled")
        }
        if (document.getElementsByClassName("submit")[0].hasAttribute("disabled") === false) {
            document.getElementsByClassName("submit")[0].setAttribute("disabled", "")
        }
    }
}
setInterval(formcheck, 500);
