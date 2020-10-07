// Declaring Events
allEvents = [
  {
    "eventName": 'Accoustic Night',
    "location": 'Abuja'
  },
  {
    "eventName": 'Tiwa & Friends Independence Day Blast',
    "location": 'Abuja'
  },
  {
    "eventName": 'Marlian Fest',
    "location": 'Abuja'
  },
  {
    "eventName": "Bourna's Abuja Tour",
    "location": 'Abuja'
  }
];

// ourEvents = [
//   {
//     eventName: 
//   }
// ];

// const display = () => {
//   window.location.assign('../contents/eventsearch.html');
// }

// const eventsPage = () => {
//   for (let i = 0; i < allEvents.length; i++) {
//     if (document.getElementById('events').value == allEvents[i].eventName) {
//       window.location.assign('../contents/eventsearch.html');
//     }
//   }

//   return false;
// }

// let array = [];

function search() {
  show = document.getElementById('events').value;
  state = document.getElementById('state').value;
  usersObject = allEvents.filter(x => x.eventName.includes(show));
  if (usersObject == undefined || usersObject == null) {
    alert(`No record found for ${show}`);
  } else {
    stateObject = usersObject.filter(x => x.location.includes(state));
    //console.log(usersObject, stateObject);
    if (stateObject == undefined || stateObject == null) {
      alert(`No record found for ${show} at ${state}`);
    } else {
      //console.log('Malik Mukhtar'); 
      // allEvents.push(usersObject);
      // allEvents.push(stateObject);

      localStorage.setItem('saveEvents', JSON.stringify(stateObject));
      window.location.assign('../contents/eventsearch.html');
    }


  }
}

function recoverSearch() {
  searchResults = JSON.parse(localStorage.getItem("saveEvents"));
  if (searchResults == undefined || searchResults == null) {
    alert(`Error`);
  } else {
    //console.log('Malik Mukhtar');
    displaySearch(searchResults);
  }

  // display();
}

function displaySearch(arr) {
  searchContent = "";
  for (j = 0; j < arr.length; j++) {
    searchContent +=
      `<div class="result-grid">
    <div class="result-img">
      <img src="../assets/img/marlian.jpg" alt="First Event">
    </div>
    <div class="result-desc">
      <p><i class="fas fa-check"></i> verified</p>
      <h3>${arr[j].eventName}</h3>
      <div class="items">
        <span>Number of views: 70</span>
        <span><i class="fas fa-map-marker-alt"></i> Sheraton Hotels</span>
        <span><strong>Entry Fee:</strong> Free</span>
      </div>
    </div>
  </div>`
  }
  document.getElementById("eventResult").innerHTML = searchContent; //Displays the Info


}
//console.log('Samuel Yusuf');

// function display() {
//   if (document.getElementById('events').value == usersObject) {
//     window.location.assign('../contents/eventsearch.html');
//   }

//   return false; 