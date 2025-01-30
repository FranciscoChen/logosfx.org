function getform(){
  getsubmittedapplications();
}

function  getsubmittedapplications(){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "/getsubmittedapplications", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState != 4)
      return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText)
      for (rownumber in data){
        const row = data[rownumber]
        const sethomecard  = document.createElement("div");
        sethomecard.classList.add('home-card-wrap')
        sethomecard.innerHTML = '<div class="home-card"><h1>入学申请表</h1><h3>姓：</h3><div><p>'+row.surname+'</p></div><h3>名字：</h3><div><p>'+row.name+'</p></div><h3>性别：</h3><div><p>'+{man:"男",woman:"女"}[row.gender]+'</p></div><h3>生日：</h3><div><p>'+row.birthdate.slice(0,4)+'年 '+row.birthdate.slice(5,7)+'月 '+row.birthdate.slice(8,10)+'日</p></div><h3>提交日期：</h3><div><p>'+row.submittedtimestamp.slice(0,4)+'年 '+row.submittedtimestamp.slice(5,7)+'月 '+row.submittedtimestamp.slice(8,10)+'日</p></div><a class="button button-area colorbutton" href="/home/menu/applications/view?id='+row.id+'">检查</a></div>'
        document.getElementsByClassName("cards")[0].appendChild(sethomecard);
      }
    }
  }
}
