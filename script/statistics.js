var app = new Vue({ 
    el: '#app',
    data: {
        title: 'Advanced Biomedical Computational Science Directory',
        description: 'Below are a list of the major statistics of the employees of the Advanced Biomedical Computational Science department.'
    }
});

Chart.defaults.global.defaultFontFamily = 'Alata';
Chart.defaults.global.defaultFontSize = 25;

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Ph.D.", "M.S.", "B.S.", "Medical School", "Administrative School"],
      datasets: [{
        label: "People",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [7,2,3,1,1]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Breakdown of Degrees Necessary for Jobs'
      }
    }
});

// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Project Management", "Programming", "Problem Solving", "Self-Learning", "Communication", "Core Science Knowledge", "Research"],
      datasets: [
        {
          label: "People",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FFFFFF", "#000000"],
          data: [4,9,6,2,5, 3, 3]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Breakdown of Skills Necessary for Jobs'
      }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Manager", "CEO and Consultant", "Bioinformatics Analyst", "Programmer Analyst", "Principal Scientist", "Postdoctoral Fellow", "Director", "Secretary II", "Guest Researcher/Assistant Professor"],
      datasets: [
        {
          label: "People",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#a98ef2", "#12b7a3", "#596489", "#e4d5d3"],
          data: [1,1,4,2,1,1,1,1, 1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Breakdown of Employee Roles'
      }
    }
});
