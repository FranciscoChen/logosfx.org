function getform(){
  getsubmittedapplications();
}

function  getsubmittedapplications(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getsubmittedapplications", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)
      console.log(data)
    }
  }
}
