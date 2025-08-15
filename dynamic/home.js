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
          submenu();
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
        ready();
      } else {
        verified();
      }
    }
  }
}
function verified(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/applicationverified", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>感谢您的申请！</h2><p>我们将尽快审核您的申请并在几天内回复您</p></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      } else {
        applicationdocuments();
      }
    }
  }
}
function applicationdocuments(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/applicationdocuments", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '1') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>文件提交完毕</h2><p>请仔细检查所有内容是否正确并确认您的提交（一旦提交，内容将被记录，并且无法进一步修改）</p><div class="application-buttons"><div id="confirmapplicationdocuments" class="button-wrap"><a class="button button-area colorbutton" href="/home/confirmapplicationdocuments">提交文件</a></div></div></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>文件提交</h2><p>我们需要您上传并签署一些文件</p><div class="application-buttons"><div id="testimony" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/testimony">个人见证</a></div><div id="ethicalcode" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/ethicalcode">操守签约</a></div><div id="photo" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/photo">证件照片</a></div><div id="certificate" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/certificate">学习证书</a></div><div id="churchrecommendation" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/churchrecommendation">教会推信</a></div><div id="firstrecommendation" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/firstrecommendation">推荐信1</a></div><div id="secondrecommendation" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/secondrecommendation">推荐信2</a></div></div></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
        testimony();
        ethicalcode();
        photo();
        certificate();
        churchrecommendation();
        firstrecommendation();
        secondrecommendation();
    }
  }
}
function testimony(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hastestimony", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('testimony').firstChild.classList.toggle('hidden')
      }
    }
  }
}
function ethicalcode(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hasethicalcode", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('ethicalcode').firstChild.classList.toggle('hidden')
      }
    }
  }
}
function photo(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hasphoto", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('photo').firstChild.classList.toggle('hidden')
      }
    }
  }
}
function certificate(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hascertificate", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('certificate').firstChild.classList.toggle('hidden')
      }
    }
  }
}
function churchrecommendation(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/haschurchrecommendation", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('churchrecommendation').firstChild.classList.toggle('hidden')
      }
    }
  }
}
function firstrecommendation(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hasfirstrecommendation", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('firstrecommendation').firstChild.classList.toggle('hidden')
      }
    }
  }
}
function secondrecommendation(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/hassecondrecommendation", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '0') {
        document.getElementById('secondrecommendation').firstChild.classList.toggle('hidden')
      }
    }
  }
}

function ready(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/applicationready", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      if (this.responseText === '1') {
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>提交申请表</h2><p>提交前请仔细检查您的所有信息是否准确（一旦发送，之后将无法编辑）</p><div class="application-buttons"><div id="studentinfo" class="button-wrap"><a class="button button-area colorbutton" href="/home/application">检查信息</a></div></div></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h2>注册流程</h2><p>您尚未填写注册表，请继续注册流程</p><div class="application-buttons"><div id="studentinfo" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/studentinfo">个人信息</a></div><div id="education" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/education">教育资料</a></div><div id="churchlife" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/churchlife">教会资料</a></div><div id="consultants" class="button-wrap"><div class="exclamation-bubble-anchor hidden"><div class="exclamation-bubble">!</div></div><a class="button button-area colorbutton" href="/home/consultants">咨询信息</a></div></div></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
        studentinfo();
        education();
        churchlife();
        consultants();
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
function submenu(){
  const sethomecard  = document.createElement("div");
  sethomecard.classList.add('home-card-wrap')
  sethomecard.innerHTML = '<div class="home-card"><h2>欢迎！</h2><a class="button button-area colorbutton" href="/home/menu">进入</a></div>'
  document.getElementsByClassName("cards")[0].appendChild(sethomecard);
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
