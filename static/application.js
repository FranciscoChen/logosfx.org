function getform(){
  fillapply();
  fillstudentinfo();
//  filleducation();
//  fillchurchlife();
//  fillconsultants();
}

function fillapply(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getapplyinfo", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      console.log(data);
      for (name in data) {
        var dataref = data[name]
        var ele
        ele = document.getElementById(name)
        if (name === 'gender') {
          dataref = {man:'男',woman:'女'}[data[name]]
        }
        if (name === 'birthdate') {
          dataref = data[name].slice(0,4)+'年 '+data[name].slice(5,7)+'月 '+data[name].slice(8,10)+'日'
        }
        if (name === 'course') {
          dataref = {0:'「基督教神学学士班」（B.Th.）',1:'「基督教教牧学士班」（B.Min.）',2:'「教会领袖证书班」（Certificate）',3:'特別学生'}[data[name]]
        }
        if (ele !== null){
            const inforow  = document.createElement("p");
            inforow.innerHTML = dataref
            ele.append(inforow)
        }
      }
    }
  }
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
