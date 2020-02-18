<script type="text/javascript">

function detail(){
  $(document).ready(function(){
    $('#content').html($('#content2').html()).get(0).scrollIntoView("#content2");
  });

  $(document).ready(function() {
    $('#example').DataTable({
      "pageLength": 4,
      "ordering": false
    });
  } );

  $(document).ready(function() {
    $('#example2').DataTable({
      "pageLength": 4,
      "ordering": false,
      "searching": false
    });
  } );
};


$(document).ready(function(){
  $('.input-tanggal').datepicker();
});

$(document).ready(function(){
  $('#content2').hide();
});

$(document).ready(function(){
  $('#ibtidaiyah').hide();
});

var ctx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 23, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

var ctx = document.getElementById('myPieChart1').getContext('2d');
var myPieChart1 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Santri Putra',
      'Santri Putri'
    ],
    datasets: [{
      label: false,
      data: [8.887, 10.293],
      backgroundColor: [
        "#63FF84",
        "#FF6384",
      ],
    }],
  },
});

var ctx = document.getElementById('myPieChart2').getContext('2d');
var myPieChart2 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Kyai',
      'Guru',
      'Santri'
    ],
    datasets: [{
      label: false,
      data: [1.554, 3.093, 18.123],
      backgroundColor: [
        "#F9C029",
        "#15BCF9",
        "#00C889"
      ],
    }],
  },
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['','2016', '2017', '2018', '2019', '2020'],
    datasets: [{
      data: [0, 4, 10, 9, 14, 18],
      backgroundColor: [
        'rgba(22, 202, 242, 0.2)',
        'rgba(145, 224, 242, 0.2)',
        'rgba(11, 117, 140, 0.2)',
        'rgba(22, 202, 242, 0.2)',
        'rgba(145, 224, 242, 0.2)',
        'rgba(11, 117, 140, 0.2)'
      ],
      borderColor: [
        'rgba(22, 202, 242, 0.2)',
        'rgba(145, 224, 242, 0.2)',
        'rgba(11, 117, 140, 0.2)',
        'rgba(22, 202, 242, 0.2)',
        'rgba(145, 224, 242, 0.2)',
        'rgba(11, 117, 140, 0.2)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
</script>
