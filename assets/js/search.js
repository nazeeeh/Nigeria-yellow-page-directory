// Declaring Events
allEvents = [
  {
    "pics": '../assets/img/music.jpg',
    "eventName": 'Accoustic Night',
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/tiwa.jpg',
    "eventName": 'Tiwa & Friends Independence Day Blast',
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/marlian.jpg',
    "eventName": 'Marlian Fest',
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/burna.jpg',
    "eventName": "Burna's Abuja Tour",
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/tiwa.jpg',
    "eventName": "Big Brother Naija",
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/tiwa.jpg',
    "eventName": "TIIDELab Cohort 2",
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/marlian.jpg',
    "eventName": "Techspecialist Software Training",
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/marlian.jpg',
    "eventName": "Tech Talks with Mr Kenny",
    "location": 'Abuja'
  }

];

function search() {

  show = document.getElementById('events').value; // Name of Event
  state = document.getElementById('state').value; // Name of State

  usersObject = allEvents.filter(x => x.eventName.includes(show)); // Filter name and get the name

  if (usersObject == false) {
    // If the keyword is not in the local storage 
    swal("This event is not currently available", "Check other events happening!", "warning");

  } else {

    stateObject = usersObject.filter(x => x.location.includes(state)); // Filter state and get the state

    if (stateObject == false) {

      // If the keyword is not in the local storage 
      swal("This event is not currently available", "Check other events happening!", "warning");

    } else{

      if ( state == "" || show == ""){
        swal("Error", "Fields cannot be empty", "warning");
      }

      else{

      // If the keyword is available in the local storage
      swal("Yes!", "Proceed to check about this event", "success");

      // AJAX Loader that loads the new page
      document.getElementById('findEvent').innerHTML = '<img src="../assets/img/ajax-loader.gif"> ';

      setTimeout(() => {
        document.getElementById('findEvent').innerHTML = '';
      }, 3000);

      // Setting the events to the local Storage
      localStorage.setItem('saveEvents', JSON.stringify(stateObject));

      setTimeout(() => {
        window.location.assign('../contents/eventsearch.html');
      }, 3000);
    }
  }
  }
}

// Getting the searched events in the local storage and displaying it
function recoverSearch() {
  searchResults = JSON.parse(localStorage.getItem("saveEvents"));
  if (searchResults == false) {
    alert(`Error`);
  } else {
    displaySearch(searchResults);
  }
}

// The HTML Template to display when an event is searched for
function displaySearch(arr) {
  searchContent = "";
  for (j = 0; j < arr.length; j++) {
    document.getElementById('valueOne').value = arr[j].eventName;
    document.getElementById('valueTwo').value = arr[j].location;
    document.getElementById('valueThree').value = new Date();
    searchContent +=
      `<div class="result-grid">
    <div class="result-img">
      <img src="${arr[j].pics}" alt="${arr[j]}">
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
