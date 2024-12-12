// Give welcomes, notifications and see what it needs to be done next
function home() {
  welcome();
  setpassword();
  studentinfo();
  education();
  churchlife();
  consultants();
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
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>欢迎！</h2></div>欢迎来到用户的个人区域，在这里您可以执行修改个人信息、完成注册或查看正在进行的课程等操作。'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
        welcomedone();
      }
    }
  }
}

function welcomedone(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/welcomedone", true);
  xhr.send();
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
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>您的密码尚未设置</h2></div><a class="button button-area colorbutton" href="/password">设置密码</a>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}

function studentinfo(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hasstudentinfo", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>您的入学申请表尚未完成</h2></div><a class="button button-area colorbutton" href="/home/studentinfo">继续申请</a>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}

function education(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/haseducation", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>请继续填写入学申请表</h2></div><a class="button button-area colorbutton" href="/home/education">继续填写</a>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}

function churchlife(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/haschurchlife", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>您即将完成表格填写</h2></div><a class="button button-area colorbutton" href="/home/churchlife">继续填写</a>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}

function consultants(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hasconsultants", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>这是完成填写表格的最后一步</h2></div><a class="button button-area colorbutton" href="/home/consultants">完成填写</a>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}

function photo(){
      return;
}
