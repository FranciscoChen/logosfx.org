function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getconsultantsinfo", true);
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
          if (ele.type === 'text') {
            ele.value = data[name]
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
            document.getElementById("form-name1").value.length > 0 && 
            document.getElementById("form-address1").value.length > 0 && 
            document.getElementById("form-phone1").value.length > 0 && 
            document.getElementById("form-relationship1").value.length > 0 && 
            document.getElementById("form-name2").value.length > 0 && 
            document.getElementById("form-address2").value.length > 0 && 
            document.getElementById("form-phone2").value.length > 0 && 
            document.getElementById("form-relationship2").value.length > 0
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
