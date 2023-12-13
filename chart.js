const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Tim', 'Dave', 'Connie'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 22],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const pie = document.getElementById('pie-chart');

  new Chart(pie, {
    type: 'pie',
    data: {
      labels: ['Tim', 'Dave', 'Connie'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



