function getform(){
  fillapply();
  fillstudentinfo();
  filleducation();
  fillchurchlife();
  fillconsultants();
}

function fillapply(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getapplyinfo", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
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
          dataref = ['「基督教神学学士班」（B.Th.）','「基督教教牧学士班」（B.Min.）','「教会领袖证书班」（Certificate）','特別学生'][data[name]]
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
  xhr.send('0');
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
            inforow.innerHTML = name === 'othertext' ? '其他：'+dataref : dataref
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
function filleducation(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/geteducationinfo", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        var dataref = data[name]
        var ele
        ele = document.getElementById(name)
        if (name === 'institution2' && dataref !== null && dataref.length > 0){
          document.getElementById('education2').classList.remove('hidden')
        }
        if (name === 'institution3' && dataref !== null && dataref.length > 0){
          document.getElementById('education3').classList.remove('hidden')
        }
        if (name === 'institution4' && dataref !== null && dataref.length > 0){
          document.getElementById('education4').classList.remove('hidden')
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
function fillchurchlife(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getchurchlifeinfo", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        var dataref = data[name]
        var ele
        ele = document.getElementById(name)
        if (name === 'callingshared') {
          dataref = data[name] ? '有' : '没有'
        }
        if (name === 'church2' && dataref !== null && dataref.length > 0){
          document.getElementById('service2').classList.remove('hidden')
        }
        if (name === 'church3' && dataref !== null && dataref.length > 0){
          document.getElementById('service3').classList.remove('hidden')
        }
        if (name === 'church4' && dataref !== null && dataref.length > 0){
          document.getElementById('service4').classList.remove('hidden')
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
function fillconsultants(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getconsultantsinfo", true);
  xhr.send('0');
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        var dataref = data[name]
        var ele
        ele = document.getElementById(name)
        if (ele !== null){
            const inforow  = document.createElement("p");
            inforow.innerHTML = dataref
            ele.append(inforow)
        }
      }
    }
  }
}
