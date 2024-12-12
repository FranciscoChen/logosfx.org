// Give welcomes, notifications and see what it needs to be done next
function home() {
  role();
}

function role(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/userrole", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      switch (this.responseText) {
        case '1':
          welcome();
          setpassword();
          submitted();
        break;
        case '2':
        break;
        case '3':
        break;
        case '4':
        break;
        default:
          const sethomecard  = document.createElement("div");
          sethomecard.classList.add('home-card-wrap')
          sethomecard.innerHTML = '<div class="home-card"><h2>错误！</h2><p>没有角色的用户，请联系网站管理员</p></div>'
          document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}

function submitted(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/applicationsubmitted", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>注册流程</h2><p>您尚未填写注册表，请继续注册流程</p><div class="application-buttons"><div id="studentinfo" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/studentinfo">个人信息</a></div><div id="education" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/education">教育资料</a></div><div id="churchlife" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/churchlife">教会资料</a></div><div id="consultants" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/consultants">咨询信息</a></div></div></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
        studentinfo();
        education();
        churchlife();
        consultants();
      } else {

      }
    }
  }
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
        sethomecard.innerHTML = '<div class="home-card"><h2>欢迎！</h2><p>欢迎来到用户的个人区域，在这里您可以执行修改个人信息、完成注册或查看正在进行的课程等操作。</p></div>'
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
        sethomecard.innerHTML = '<div class="home-card"><h2>您的密码尚未设置</h2><a class="button button-area colorbutton" href="/password">设置密码</a></div>'
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
        document.getElementById('studentinfo').firstChild.classList.toggle('hidden')
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
        document.getElementById('education').firstChild.classList.toggle('hidden')
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
        document.getElementById('churchlife').firstChild.classList.toggle('hidden')
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
        document.getElementById('consultants').firstChild.classList.toggle('hidden')
      }
    }
  }
}
