function getform(){
  const id = new URLSearchParams(window.location.search).get('id');
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/gettestimony", true);
  xhr.send(id);
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)[0]
      for (name in data) {
        const ele = document.getElementsByName(name)[0]
        if (typeof ele !== 'undefined') {
          ele.value = data[name]
        }
      }
    }
  }
}
