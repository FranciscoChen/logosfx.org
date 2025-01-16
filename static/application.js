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
      var nameref
      var dataref
      for (name in data) {
        dataref = data[name]
        if (name === 'maritalstatus') nameref = dataref
        const ele = document.getElementById(nameref)
        if (ele !== null){
          if (ele.classList.contains('circle-around-anchor')){
            if (dataref === true) {
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
