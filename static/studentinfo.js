function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getstudentinfo", true);
  xhr.send('0');
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
            (
                    document.getElementById("form-computers").checked === true || 
                    document.getElementById("form-english").checked === true || 
                    document.getElementById("form-calligraphy").checked === true || 
                    document.getElementById("form-music").checked === true || 
                    document.getElementById("form-dance").checked === true || 
                    document.getElementById("form-other").checked === true
            ) &&
            document.getElementById("form-currentjob").value.length > 0 && 
            document.getElementById("form-currentjobstart").value.length > 0 &&
            (
                    document.getElementById("form-single").checked === true || 
                    document.getElementById("form-engaged").checked === true || 
                    document.getElementById("form-married").checked === true || 
                    document.getElementById("form-widow").checked === true || 
                    document.getElementById("form-separated").checked === true || 
                    document.getElementById("form-divorced").checked === true || 
                    document.getElementById("form-divorcedandremarried").checked === true
            )
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
