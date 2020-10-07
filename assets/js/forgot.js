    function validateEmail()
    {

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = document.getElementById("email").value
    
    function changeLocation(){
        location.assign ("../contents/reset.html")
    }

    if(mail.match(mailformat))
    {
    alert("please log into your registered mail to retrieve your reset code");
    document.getElementById("email").style.borderColor = 'green';
    setTimeout(changeLocation, 1000)
    
    }else if(mail == ""){
        alert("Cannot submit an empty form, please enter your registered email")
        document.getElementById("email").style.borderColor = 'red';
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.getElementById("email").style.borderColor = 'red';
    }
    }