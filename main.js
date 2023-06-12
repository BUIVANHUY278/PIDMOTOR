var data = new FormData();
    const firebaseConfig = {
        apiKey: "AIzaSyBrYmGTx98caeJCGQh_G8fr5RsqodFVn94",
        authDomain: "do-an-tot-nghiep-2023.firebaseapp.com",
        databaseURL: "https://do-an-tot-nghiep-2023-default-rtdb.firebaseio.com",
        projectId: "do-an-tot-nghiep-2023",
        storageBucket: "do-an-tot-nghiep-2023.appspot.com",
        messagingSenderId: "540027038674",
        appId: "1:540027038674:web:d2923cd3acc95bd16d760b",
        measurementId: "G-430Y260PZG"
        };
    firebase.initializeApp(firebaseConfig);
    
    function writeData(a) {
        firebase.database().ref('PID').set({
        SP: a,
        TOCDO: lastRPM
    });
    }
    var lastRPM ;
    var rpm = firebase.database().ref('PID').child('TOCDO');
    rpm.on('value', snap => {
        document.querySelector('.value_rpm').innerHTML = snap.val()+" Vòng/phút"
        lastRPM = snap.val();
        var d = new Date();
        var time =  `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
        upadate(cha, time, snap.val())


        data.append("Tốc độ (Vòng/Phút)", snap.val())
        fetch(scriptURL, { method: 'POST', body: data})
        data.delete("Tốc độ (Vòng/Phút)");
    })

    const chart = document.getElementById('chart_rpm');
      
        var cha = new Chart(chart, {
          type: 'line',
          data: {
            labels: [],
            datasets: [{
              label: 'Tốc độ',
              data: [],
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

    function upadate(chart, x, y) {
        chart.data.datasets[0].data.push(y)
        chart.data.labels.push(x)
        if(chart.data.datasets[0].data.length > 15 ) {
          chart.data.datasets[0].data.shift();
          chart.data.labels.shift();
        }
        chart.update()
    }


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw06BPE7lW0-v9nDVg43ipTa8OY2Y1wXbOD5gdzTsn6iMNmPfUr8g3HyKuOBISlQYDSvw/exec'
  const form = document.forms['submit-to-google-sheet']

  const infor = document.querySelector(".icon ");
  const closeMenu = document.querySelector(".close")
  const menuM = document.querySelector(".menu");

  closeMenu.addEventListener("click", function() {
    menuM.classList.remove("open")
  })

  infor.addEventListener("click", function() {
    if(!menuM.classList.contains("open")) {
      menuM.classList.add("open")
    }
    else {
      menuM.classList.remove("open")
    }
  })


const download = document.querySelector(".js_download");

download.addEventListener("click", function() {
  var n = document.querySelector(".js_sub_download");
  if(!n.classList.contains("mh-100")) {
    n.classList.add("mh-100")
  }
  else {
    n.classList.remove("mh-100")
  }

});

const contact = document.querySelector(".js_contact");

contact.addEventListener("click", function() {
  var n = document.querySelector(".js_sub_contact");
  if(!n.classList.contains("mh-100")) {
    n.classList.add("mh-100")
  }
  else {
    n.classList.remove("mh-100")
  }
})