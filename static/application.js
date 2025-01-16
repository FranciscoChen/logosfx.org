function getform(){
//  fillapply();
//  fillapplystudent();
  fillstudentinfo();
//  filleducation();
//  fillchurchlife();
//  fillconsultants();
}

function fillstudentinfo(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getstudentinfo", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      console.log(data);
      const ele = document.getElementById('studentinfo')
      const fieldnames = {

      }
      for (name in data) {
        if (typeof fieldnames[name] !== 'undefined')
        const inforow  = document.createElement("div");
        inforow.innerHTML = '<p><b>'+fieldnames[name] + ':</b>' + data[name]+'</p>'
        ele.append(inforow)
      }
    }
  }
}
