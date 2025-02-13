function getform(){
  const formphoto = document.getElementById("form-photo")
  const photopreview = document.getElementById("photo-preview")
  formphoto.addEventListener("change",()={
    const reader = new FileReader();
    reader.onload= (e) => {
      photopreview.src = e.target.result;
    };
    reader.onerror = (err) => {
      console.error("Error reading file:",err);
    };
    reader.readAsDataURL(formphoto.files[0]);
  }) 
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getphoto", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        const ele = document.getElementsByName(name)[0]
        if (typeof ele !== 'undefined') {
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
