function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getconsultantsinfo", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        const ele = document.getElementsByName(name)[0]
        if (typeof ele !== 'undefined') {
          if (ele.type === 'checkbox') {
            ele.checked = {'true':1,'false':0}[data[name]];
          }
          if (ele.type === 'text') {
            ele.value = data[name]
          }
          if (ele.type === 'radio') {
            const elearr = document.getElementsByName(name)
            const len = elearr.len
            for (var i = 0; i < len; i++){
              if (elearr[i].value === data[name]){
                elearr[i].checked = 1;
                break;
              }
            }
          }
        }
      }
    }
  }
}