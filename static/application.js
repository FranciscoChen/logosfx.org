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
      for (name in data) {
        const dataref = data[name]
        var ele
        ele = document.getElementById(name)
        if (name === 'maritalstatus') {
          ele = document.getElementById(dataref)
        }
        if (ele !== null){
          if (ele.classList.contains('circle-around-anchor')){
            if (dataref === true || name === 'maritalstatus') {
              ele.classList.remove('hidden')
            }
          } else {
            const inforow  = document.createElement("p");
            inforow.innerHTML = dataref
            ele.append(inforow)
          }
          if (name === 'children' && dataref !== null && dataref.length > 0){
            document.getElementById('ifchildren').classList.remove('hidden')
          }
          if (name === 'partnername' && dataref !== null && dataref.length > 0){
            document.getElementById('ifmarried').classList.remove('hidden')
          }
        }
      }
    }
  }
}
