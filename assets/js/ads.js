let adsInfo = JSON.parse(localStorage.getItem("adsInfo"));
if (adsInfo == null) {
    adsInfo = []
}



   

const adsForm = (e) => {
    // e.preventDefault();
    newAd = {
        recipientName: document.getElementById("recipient-name").value,
        messageText: document.getElementById("message-text").value,
        inputGroup: document.getElementById("inputGroupFile02").value

    };
    // alert('He;llo')
    adsInfo.push(newAd);
    // console.log(adsInfo);
    

    
    if (newAd.recipientName != '' &&
        newAd.messageText != ''){
            swal("Posted", "Proceed to check about this event", "success");
        } else {
            swal("Error!", "Kindly fill all fields", "warning");
        }
        localStorage.setItem("adsInfo", JSON.stringify(adsInfo))
        ()
    };
            // console.log('adsInfo');
    
    // let postButton = document.getElementById("add-btn")
    // postButton.addEventListener("click", adsForm);