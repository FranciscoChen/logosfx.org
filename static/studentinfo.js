function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getstudentinfo", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      console.log(this.responseText)
    }
  }
}
