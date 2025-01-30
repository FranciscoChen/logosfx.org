function addsection(){
  const s2 = document.getElementById('toggle-section2')
  const s3 = document.getElementById('toggle-section3')
  const s4 = document.getElementById('toggle-section4')
  s2.addEventListener("click", function() {
    this.classList.toggle('hidden')
    document.getElementById('section2').classList.toggle('hidden')
  })
  s3.addEventListener("click", function() {
    this.classList.toggle('hidden')
    document.getElementById('section3').classList.toggle('hidden')
  })
  s4.addEventListener("click", function() {
    this.classList.toggle('hidden')
    document.getElementById('section4').classList.toggle('hidden')
  })
}
function expandsection(){
  const s2 = document.getElementById('toggle-section2')
  const s3 = document.getElementById('toggle-section3')
  const s4 = document.getElementById('toggle-section4')
  if (document.getElementsByName('church2')[0].value.length > 1) {
    s2.classList.toggle('hidden')
    document.getElementById('section2').classList.toggle('hidden')
  } 
  if (document.getElementsByName('church3')[0].value.length > 1) {
    s3.classList.toggle('hidden')
    document.getElementById('section3').classList.toggle('hidden')
  } 
  if (document.getElementsByName('church4')[0].value.length > 1) {
    s4.classList.toggle('hidden')
    document.getElementById('section4').classList.toggle('hidden')
  } 
}
function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getchurchlifeinfo", true);
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
              if (elearr[i].value === 'true' && data[name] === true){
                elearr[i].checked = 1;
                break;
              }
              if (elearr[i].value === 'false' && data[name] === false){
                elearr[i].checked = 1;
                break;
              }
            }
          }
        }
      }
      if (typeof expandsection === 'function') {expandsection()}
    }
  }
}
function formcheck() {
    if (
            document.getElementById("form-faith").value.length > 0 && 
            document.getElementById("form-baptism").value.length > 0 && 
            document.getElementById("form-baptismchurch").value.length > 0 &&
            document.getElementById("form-usualchurch").value.length > 0 &&
            document.getElementById("form-church1").value.length > 0 &&
            document.getElementById("form-task1").value.length > 0 &&
            document.getElementById("form-startyear1").value.length > 0 &&
            document.getElementById("form-endyear1").value.length > 0 &&
            (
                    document.getElementById("form-callingsharedtrue").checked === true || 
                    document.getElementById("form-callingsharedfalse").checked === true
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
