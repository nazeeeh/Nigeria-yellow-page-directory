
function addEvents() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');
        </style>
        <h3 style="font-family: Ubuntu;  margin-top: 2rem; margin-bottom:1rem; font-size: 16px;line-height: 26px;">Events</h3>
        <div style="height: 245px; width: 850px; left:37px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 200px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/WomanFace2.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative; top:-60px">
            <p style= "font-family:'Ubuntu', sans-serif;color: #F8C800; font-size: 17px;  line-height: 25px;"> <span style="color:#fff; ">No events posted yet!</span></p> <br>
            <button type="button" onclick="createEvents()" style="width:189px; height:53px; border:none; border-radius:10px; background-color:#F8C800; color:#000; box-shadow:#686868; font-weight:bolder;">Add Event</button>  
            </div>
        </div>
    
    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}



function createEvents() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>
        <style>
        *{
            box-sizing:border-box;
        }
        @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');
        font-family:'Ubuntu',sans-serif;
        .form-root{
            display:flex;
            flex-wrap:wrap;
            
        }
        .name-side .date-side {
            float:left;
        }
        .location-side {
            position:absolute;
            left:450px;
            top:166px;
        }
        .file-side{
            position:absolute;
            left:450px;
            top:256px;
        }
        .btn-side{
            position:absolute;
            left:290px;
            
        }
        #text-side {
            border:1px solid #C4C4C4 !important;
            width:850px !important; 
            height:200px; 
            padding:5px;  
            margin-bottom: 1rem; 
            border-radius:5px; 
            color:#7B7B7B; 
            font-size:15px; 
            outline:none !important;
            // border:1px solid #7B7B7B;
        }
        </style>
        <h3 style="margin-top: 2rem; font-size: 16px;line-height: 26px; font-weight:bold;">Events</h3>
        <h1 style="margin-top: 2.5rem; margin-bottom: 2.7rem; font-size: 20px;font-weight: bold;line-height: 26px; color:#000;">Create Event</h1>
        <div class="form-root">
        <div class="name-side">
        <input class="first-side" style="width:400px; height:50px; margin-bottom: 1rem; border-radius:5px; color:#7B7B7B; font-size:15px; border:1px solid #C4C4C4;" type="text" name="name" id="name" placeholder="Name" required >
       </div>
       <div class="location-side">
        <select name="Location" id="location"   style="width:400px;  margin-bottom: 1rem; left:864px; height:50px; border-radius:5px; color:#7B7B7B; font-size:15px; border:1px solid #C4C4C4;">
        <option value="location">&nbsp; Location</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
        <option value="ph">Porthacourt</option>
        <option value="kaduna">Kaduna</option>
        <option value="osun">Osun</option>
        <option value="imo">Imo</option>
        <option value="benin">Benin</option>
     </select> 
     </div>
     <br>
     <div class="date-side">
     <input  style="width:400px; height:50px;  margin-bottom: 1rem; border-radius:5px; color:#7B7B7B; font-size:15px; border:1px solid #C4C4C4;" type="date" name="date" id="date" placeholder="Date" required >
     </div>
     <div class="file-side">   
     <input type="text" name="file" id="file"  margin-bottom: 1rem; placeholder="Flyer/Poster/Picture" class="inputfile" style="width:282px;  margin-bottom: 1rem; height:50px; border-radius:5px; color:#7B7B7B; font-size:15px; border:1px solid #C4C4C4;" type="file" /> <button for="file" class="btn-side" style="width:123px; margin-left:-10px; height:50px; border-radius:5px; background-color:#F8C800; color:#000; border:none; ">Choose a file</button><br>
      </div>  
     <textarea id="text-side"  name="describe" id="event-description">Event Description</textarea>
            <button onclick="goToDetails()" style="width:99px; height:53px; border-radius:10px; background-color:#F8C800; color:#000; border:none; font-weight:bolder;">Create</button>  
        </div>
    
    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}


function goToDetails() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');
        font-family:'Ubuntu',sans-serif;
        </style>
        <h3 style="margin-top: 2rem; font-size: 16px;line-height: 26px;">Events</h3>
               <div>
              <img src="../assets/img/results.png" style="width: 850px; drop-shadow(10px 10px 30px rgba(174, 174, 192, 0.4)), drop-shadow(-10px -10px 30px #FFFFFF);"> <br> <br>
              </div>
                
            <button type="button" onclick="createEvents()" style="width:160px; height:53px; border:none; border-radius:10px; background-color:#F8C800; color:#000; box-shadow:#686868; font-weight:bolder;">Add Event</button>  
        </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails

}
