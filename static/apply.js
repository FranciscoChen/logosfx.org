function getform(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getapplyinfo", true);
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
          if (ele.type === 'date') {
            ele.value = data[name].slice(0,4)+'-'+data[name].slice(5,7)+'-'+data[name].slice(8,10)
          }
          if (ele.type === 'radio') {
            const elearr = document.getElementsByName(name)
            const len = elearr.length
            for (var i = 0; i < len; i++){
              if (elearr[i].value === {0:'bacheloroftheology',1:"bachelorofministry",2:"churchleadershipcertificate",3:"specialstudents"}[data[name]]){
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
