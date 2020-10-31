function findBusiness() {

  business = document.getElementById('business').value; // Name of Business
  cat = document.getElementById('category').value; // Name of Category
  loc = document.getElementById('location').value; // Name of Location

  usersObject = userInfo.filter(x => x.businessName.includes(business)); // Filter name and get the name
  
  if (usersObject == false) {
    // If the keyword is not in the local storage 
    swal("This Business is not valid", "Check for other Businesses!", "warning");

  } else {

    stateObject = userInfo.filter(x => x.category.includes(cat)); // Filter state and get the state

    if (stateObject == false) {

      // If the keyword is not in the local storage 
      swal("This Business is not valid", "Check for other Businesses!", "warning");

    } else {

      if ( business == "" || cat == "" || loc == "") {
        swal("Error!", "Fields cannot be empty", "warning");
      }

      else{

        // If the keyword is available in the local storage
        swal("Yes!", "Proceed to check about this Business", "success");
  
        // AJAX Loader that loads the new page
        document.getElementById('findBus').innerHTML = '<img src="../assets/img/ajax-loader.gif"> ';
  
        setTimeout(() => {
          document.getElementById('findBus').innerHTML = '';
        }, 2800);
  
        // Setting the events to the local Storage
        localStorage.setItem('saveBusiness', JSON.stringify(stateObject));
  
        setTimeout(() => {
          window.location.assign('../contents/yellowsearch.html');
        }, 3000);
      }
      }

  }
}

// Getting the searched events in the local storage and displaying it
function recoverSearch() {
  searchResults = JSON.parse(localStorage.getItem("saveBusiness"));
  if (searchResults == false) {
    swal("Error!", "Details not found", "warning");
  } else {
    displaySearch(searchResults);
  }
}

// The HTML Template to display when an event is searched for
function displaySearch(arr) {
  searchContent = "";
  for (j = 0; j < arr.length; j++) {
    document.getElementById('valueOne').value = arr[j].businessName;
    document.getElementById('valueTwo').value = arr[j].category;
    document.getElementById('valueThree').value = arr[j].location;

      
      searchContent +=
              
      /* We would work on this, we used the 'a' tag and its styling temporarily
         because we had to meet Mr. kenny's demands and deadlines,
         as we work and move forward, changes would be made.
      */
        `  
                <a href = businessdetails.html style= "text-decoration: none; color: #000;"><div class="result-grid">
                <div class="result-img">
              <!-- Search Image -->
              <img src="${arr[j].imagesource}" style="max-width:198px;max-height:195px;border-radius:5px;">
                </div>
                <div class="result-desc">
              <!-- Search Description -->
              <div class="desc-inner">
                    <div class="inner-1">
                      <span>${arr[j].category}</span>
                      <span><i class="fas fa-check"></i> verified</span> <br>
                      <h3>${arr[j].businessName}</h3>
                      <p><i class="fas fa-phone"></i> ${arr[j].number}</p>
                      <p><i class="fas fa-envelope"></i> ${arr[j].email}</p>
                    </div>
                  </div>
                  <div class="items">
                    <span>Location: ${arr[j].location}</span>
                    <span>Member Since: Sept. 28, 2020</span>
                    <span><strong>Status:</strong> Verified</span>
                  </div>
                </div>
              </div>
              </div></a>`
        
  }
  document.getElementById("yellowResult").innerHTML = searchContent; //Displays the Info
}
