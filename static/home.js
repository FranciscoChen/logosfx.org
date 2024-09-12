// Give welcomes, notifications and see what it needs to be done next
function home() {
  welcome();
  setpassword();
  personalinfo();
  photo();
}

function welcome(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/welcomemessage", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText.length > 0) {
        const welcomecard = newCard();
        welcomecard.classList.add = 'welcomecard'
        welcomecard.innerHTML = this.responseText
      }
    }
  }
}

function setpassword(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/haspassword", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const setpasswordcard = newCard();
        setpasswordcard.classList.add = 'set-password-wrap'
        setpasswordcard.innerHTML = '<div class="set-password"><h2>您的密码尚未设置</h2></div><a class="button button-area colorbutton" href="/password">设置密码</a>'
      }
    }
  }
}

function personalinfo(){
      return;
}

function photo(){
      return;
}

function newCard(){
  const cards = document.getElementsByClassName("cards")[0]
  const newdiv = document.createElement("div");
  cards.appendChild(newdiv);
  return newdiv;
}
