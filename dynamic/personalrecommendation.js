function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getpersonalrecommendationlink", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4) {
      return;
    }
    if (this.status == 200) {
      const data = this.responseText
        // Show the link to user 
    }
  }
}

function formcheck() {
    if (
            true
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
