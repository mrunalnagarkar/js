
    var userInfo = JSON.parse(localStorage.getItem('LoggedInUser'));
    $('.username').text(userInfo.email);


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/results');
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);

    if (!ourData.length) {
        document.getElementById('historyStat').style.display = 'block';
    }
    else {
        document.getElementById('historyStat').style.display = 'none';
        renderHTML(ourData);

    }

};
ourRequest.send();
var q1,q2,q3,q4,q5;
var marks = [];
function renderHTML(data) {

    console.log(userInfo);

    for (var i = 0; i < data.length; i++) {

        if(data[i].userid == userInfo.userId) {
            var a = document.getElementById('tbody')
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.append(i + 1);
            var td2 = document.createElement('td');
            td2.append(data[i].subject);
            var td3 = document.createElement('td');
            td3.append('-');
            var td4 = document.createElement('td');
            td4.append(data[i].marksObtained);
            var td5 = document.createElement('td');
            td5.append(data[i].totalMarks);
            var td6 = document.createElement('td');
            td6.append(data[i].timeElapsed);
            var td7 = document.createElement('td');
            td7.append(data[i].dateTime);
    
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tr.append(td7);
           
            marks.push(data[i].marksObtained);
            console.log(data[i].marksObtained);
            document.getElementById('tbody').append(tr);
        }
        
    }
    
   // console.log(q1=data[0].marksObtained);    //alert(q1);
   // alert(q2);
}

   