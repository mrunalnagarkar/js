new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["html"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd"],
          data: [localStorage.getItem('totalCorrect')]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Progress Report'
      }
    }
});
$(document).ready(function () {


    // Fetching score from localstorage 
    $('.total-question').text(localStorage.getItem('totalQuetions'));
    $('.total-attempt').text(localStorage.getItem('totalAttempt'));
    $('.total-correct').text(localStorage.getItem('totalCorrect'));
    $('.total-wrong').text(localStorage.getItem('totalWrong'));
    $('.percentage').text(localStorage.getItem('percentage')+ ' %');
    $('.total-score').text(localStorage.getItem('totalCorrect') +' / '+ localStorage.getItem('totalQuetions'));
   
    console.log(localStorage.getItem('percentage'));



    $('#btnDash').click(function(){
        window.location.href = "../dashboard/dashboard.html";
    })  
    $('#btnHome').click(function(){
        window.location.href = "../Home Page/homepage.html";
    })
});