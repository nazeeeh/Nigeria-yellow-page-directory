function addDocs() {
    userDetails = ' ';
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div id="available-docs">
       
        <div>
        </div>
        
        <h3 style="  margin-top: 3rem; font-size: 18px;font-weight: bold;line-height: 23px;">Uploaded Documents</h3>
        <div style="height: 245px; width: 850px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(55.63px);border-radius: 10px;">
            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/WomanFace2.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative; top:-60px">
 
        <p style="color:white;">A <abbr title="Corporate Affairs Commission">CAC</abbr> Certificate and a maximum of 5 pictures is needed to verify your business.</p>
        </div>
            </div>
        
        <!-- Button trigger modal -->
        <button style="width:180px; height:53px; border:none; color:white; border-radius:10px; background-color:#F8C810 !important; box-shadow:#686868;  padding:1px !important; font-weight:bolder;" type="button" id= "main-btn" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
            Upload Document
        </button>
        <button onclick="displayDocument()" style="width:180px; color:white; margin-left:30px; height:53px; border:none; border-radius:10px; background-color:#F8C810 !important; padding:1px !important;  box-shadow:#686868; font-weight:bolder;" type="button" id= "main-btn" class="btn btn-primary" >
            View Document
        </button>
          <br><br>
 

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="margin-left:140px;" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel" style=" color:#8f8f8f; ">Upload Document</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
            <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label" style=" color:#8f8f8f; ">Title</label>
                    <input type="text" class="form-control" id="title" style=" color:#8f8f8f; border-radius:5px; " >
                  </div>
                  <div class="form-group">
                  <label for="recipient-name" class="col-form-label" style=" color:#8f8f8f; ">Attach Document</label>
                  <div style=" height:230px; border-radius:5px; border:3px dashed #c4c4c4; " class="custom-file">
                  <div class="custom-file"  id="change">
                    <input id="uploadDoc" type="file"  onchange="imageLoader(event)"  style="height:250px; width:600px; cursor:pointer;" class="custom-file-input" name="filename" id="customFile" accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png">
                  </div> 
                  <div style="width:600px; height:230px;" >
                  <img src="" id="document" style="width:430px; height:220px; margin-left:15px; margin-top:-35px; display:none;">
                  <div id="picCont">
                    <i  class="fas fa-file-upload picCont"  style="text-align:center; color:#c4c4c4; font-size:90px; margin-left:190px; margin-top:-23px; margin-bottom:10px; "></i>
                            
                            <p class="picCont" style="text-align:center; color:#8f8f8f; margin-left:-140px; " >Drag or drop here</p>
                            <p class="picCont" style="text-align:center; color:#8f8f8f; margin-left:-140px; " >Or</p>
                            <p class="picCont" style="text-align:center; color:#8f8f8f; margin-left:-140px; " >Browse files</p>
                            </div
                   </div>
                    
                  </div>
                  </div>
                  <label for="message-text" class="col-form-label" style=" font-size:14px; color:#c4c4c4; ">Accepted file types : .jpeg, .jpg, .png &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fas fa-lock" style="color:#c4c4c4;"> </i> Secure </span></label>
                  
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Description</label>
                    <input type="text" class="form-control" id="description" style=" color:#8f8f8f; border-radius:5px; " >
                  </div>
                  
               
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" onclick="uploadedDocs()" class="btn btn-primary" data-dismiss="modal" style="background: #F8C800; border:#F8C800; color:#fff; ">Upload</button>
        </div>
      </div>
    </div>
  </div>
  
        
    </div>`
    }
    
    document.getElementById("registration-form").innerHTML = userDetails
}

//displaying the selected image in the dashed box

function displayImage(event){ // display selected image function
      if(event.target.files.length > 0){// get the image src and append it to the preview which is the default image holder
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("document");
        let cont = document.getElementById("picCont")
        preview.src = src;
        preview.style.display = "block";
        picCont.style.display = "none";
      } 
    }
    
    function previewFile() {
      const preview = document.querySelector('img');
      const file = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();
    
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        imgSrc = preview.src
        imgSrc = reader.result;
        
      }, false);
    
      if (file) {
        reader.readAsDataURL(file);
      }
    }
//putting both functions into a single function
function imageLoader(event) {
  displayImage(event)
  previewFile()
}

//saving the details gotten into the local storage
userDocument = JSON.parse(localStorage.getItem("user"))
    if(userDocument == null){
        userDocument = []
    }

function uploadedDocs(){
    

    newDocument = {
        "title" : document.getElementById("title").value,
        "image" : imgSrc,
        "description" : document.getElementById("description").value
    }
         if(userDocument.length <= 5){
        
            userDocument.push(newDocument)
            localStorage.setItem("user", JSON.stringify(userDocument))

        }
        else{
            swal({
                text: "Cannot accept more than six(6) uploads",
                icon: "error",
                button: "OK",
            });
        }
        
        displayDocument()
    }

//displaying the information from the local storage
function  displayDocument() {
  if(userDocument.length == [] ){
      swal("", "You have not uploaded any document", "error")
  }
  else {
      userDetails = ' <p style="color:#F8C800; font-size:18px; cursor:pointer;" onclick="addDocs()"><i class="fas fa-long-arrow-alt-left"></i> Go back to upload page</p><br><br> '
       for (i = 0; i < userDocument.length; i++) {
          userDetails += `
     
          <style>
          #registration-form{
            display:inline-block;
          }
              .box-pack {
               margin-bottom:40px;
               margin-left:170px;
            }
             
              .boxes{
                  
                  text-align: center;
                  border:1px lightgray solid;
                  box-shadow: gray 1px 2px 0 2px;
                  padding: 10px;
                  width:500px;
                  border-radius: 10px;
                  color: black;
                  
                  
              }
          </style>
         <div class="box-pack card-group">
              <div class="boxes card " >
                  <div class=" card-header" style="background-color:#F8C800; color:white;">
                      <strong>${userDocument[i].title}</strong> 
                  </div>
                  <div  class=" card-body" style="height:300px;">
                      <img src="${userDocument[i].image}" class="card-img-top" alt="Card image cap" style="height:280px; padding:10px;">
                  </div>
                  <div class=" card-footer" style="background-color:#F8C800; color:white; ">
                      ${userDocument[i].description} <br> 
                  </div>
                  <button id="delete-btn" onclick="deleteDoc(${i})" ><i class="fas fa-trash-alt" style="  text-align:center; "></i></button>
              </div>
          
      </div>`
  }
}
  
  document.getElementById("registration-form").innerHTML = userDetails
}

//deleting a document
function deleteDoc(i) {

    confirmMessage = confirm("Are you sure you want to delete this document?")


    if (confirmMessage == true) {
        localStorage.removeItem(userDocument.splice(i, 1))
        localStorage.setItem("user", JSON.stringify(userDocument))
        displayDocument()
    }
}


function usersbutton() {
    document.getElementById("upload").innerHTML = `<img src ="..assets/img/ajax-loader (1).gif"> Updating..`


    setTimeout(() => {
        document.getElementById("upload").innerHTML = `Update My Info`
    }, 8000)
}

