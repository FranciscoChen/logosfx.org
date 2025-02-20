function getform(){
  const formphoto = document.getElementById("form-photo")
  const photopreview = document.getElementById("photo-preview")
  function readerFunction(){
    const reader = new FileReader();
    reader.onload= (e) => {
      photopreview.src = e.target.result;
      if (photopreview.parentNode.classList.contains('hidden')) {
        photopreview.parentNode.classList.toggle('hidden')
      }
    };
    reader.onerror = (err) => {
      console.error("Error reading file:",err);
    };
    if (formphoto.files.length){
      reader.readAsDataURL(formphoto.files[0]);
    } else {
      if (!photopreview.parentNode.classList.contains('hidden')) {
        photopreview.parentNode.classList.toggle('hidden')
      }
    }
  };
  formphoto.addEventListener("change", readerFunction);
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getphoto", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4) {
      return;
    }
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        const ele = document.getElementsByName(name)[0]
        if (typeof ele !== 'undefined') {
          //ele.value = data[name]
          getImage(data[name],ele)
        }
      }
    }
  }
}
function getImage(url,element){
  const formphoto = document.getElementById("form-photo")
  var xhr = new XMLHttpRequest;
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = (event) => {
    const urlobject = new URL(url)
    const imagefile = new File([xhr.response], urlobject.pathname.split('/').slice(-1)[0])
    formphoto.files.push(imagefile);
  }
  xhr.send();
}

function formcheck() {
    if (
            typeof document.getElementById("form-photo").files !== "undefined" &&
            document.getElementById("form-photo").files.length > 0 &&
            document.getElementById("form-photo").files[0].size < 2097152 &&
            document.getElementById("photo-preview").height > 0
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
