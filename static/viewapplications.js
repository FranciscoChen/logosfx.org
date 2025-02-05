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
      const table = document.getElementsByClassName("table")[0]
      for (rownumber in data){
        const row = data[rownumber]
        const tablerow  = document.createElement("tr");
        sethomecard.innerHTML = '<td>'+row.surname+' '+row.name'</td>'+
        '<td><a class="button button-area '+row.verified ? 'green' : 'red' +'button" href="/home/menu/applications/view?id='+row.id+'">检查</a></div></td>'
        '<td><a class="button button-area '+row.photo ? 'green' : 'red' +'button" href="/home/menu/photos/view?id='+row.id+'">查看</a></div></td>'
        '<td><a class="button button-area '+row.educationcertificate ? 'green' : 'red' +'button" href="/home/menu/educationcertificate/view?id='+row.id+'">查看</a></div></td>'
        '<td><a class="button button-area '+row.faithsignature ? 'green' : 'red' +'button" href="/home/menu/faithsignature/view?id='+row.id+'">查看</a></div></td>'
        '<td><a class="button button-area '+row.testimony ? 'green' : 'red' +'button" href="/home/menu/testimony/view?id='+row.id+'">查看</a></div></td>'
        '<td><a class="button button-area '+row.churchrecommendation ? 'green' : 'red' +'button" href="/home/menu/churchrecommendation/view?id='+row.id+'">查看</a></div></td>'
        '<td><a class="button button-area '+row.elderrecommendation1 ? 'green' : 'red' +'button" href="/home/menu/elderrecommendation1/view?id='+row.id+'">查看</a></div></td>'
        '<td><a class="button button-area '+row.elderrecommendation2 ? 'green' : 'red' +'button" href="/home/menu/elderrecommendation2/view?id='+row.id+'">查看</a></div></td>'
        table.appendChild(tablerow);
      }
    }
  }
}
