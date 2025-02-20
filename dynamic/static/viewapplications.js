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
      const table = document.getElementsByClassName("table-body")[0]
      for (rownumber in data){
        const row = data[rownumber]
        const tablerow  = document.createElement("tr");
        tablerow.innerHTML = '<td class="applicantname"><p>'+row.surname+' '+row.name+'</p></td>'+
        '<td><a class="button button-area'+(row.verified ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/applications/view?id='+row.id+'">检查</a></td>'+
        '<td><a class="button button-area'+(row.photo ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/photos?id='+row.id+'">查看</a></td>'+
        '<td><a class="button button-area'+(row.educationcertificate ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/educationcertificate?id='+row.id+'">查看</a></td>'+
        '<td><a class="button button-area'+(row.faithsignature ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/faithsignature?id='+row.id+'">查看</a></td>'+
        '<td><a class="button button-area'+(row.testimony ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/testimony?id='+row.id+'">查看</a></td>'+
        '<td><a class="button button-area'+(row.churchrecommendation ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/churchrecommendation?id='+row.id+'">查看</a></td>'+
        '<td><a class="button button-area'+(row.elderrecommendation1 ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/elderrecommendation1?id='+row.id+'">查看</a></td>'+
        '<td><a class="button button-area'+(row.elderrecommendation2 ? ' ' : ' disabled ')+'colorbutton" href="/home/menu/elderrecommendation2?id='+row.id+'">查看</a></td>'
        table.appendChild(tablerow);
      }
    }
  }
}
