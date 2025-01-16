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
        const ele = document.getElementById(name)
        if (ele !== null){
          if (ele.classList.contains('circle-around-anchor')){
            if (data[name] === true) {
              ele.classList.remove('hidden')
	    }
          } else {
            const inforow  = document.createElement("p");
            inforow.innerHTML = data[name]
            ele.append(inforow)
	  }
        }
      }
    }
  }
}
