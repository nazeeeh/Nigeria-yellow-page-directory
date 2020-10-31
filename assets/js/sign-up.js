// let businessName = document.getElementById("business-name").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
// let address = document.getElementById("business-address").value;
// let location = document.getElementById("location").value;
// let city = document.getElementById("city").value;
// let number = document.getElementById("number").value;
// let website = document.getElementById("website").value;



let userInfo = JSON.parse(localStorage.getItem("userInfo"));
if (userInfo == null) {
    userInfo = [];
}

const userForm = (e) => {
    e.preventDefault();
    newUser = {
        businessName: document.getElementById("business-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        category: document.getElementById("busCategory").value,
        location: document.getElementById("location").value,
        city: document.getElementById("city").value,
        number: document.getElementById("number").value,
        website: document.getElementById("website").value,
        fax: document.getElementById("Fax"),
        textarea: document.getElementById("textarea"),
        imagesource: localStorage.getItem("StoreImages")
    };

    // trying to avoid the space displaying "null"
    newUser.textarea = ""
    newUser.fax = ""


    userInfo.push(newUser);
    var check_box = document.getElementById("check-box")


    if (newUser.businessName != '' &&
        newUser.email != '' &&
        newUser.password != '' &&
        newUser.category != '' && newUser.location != '' &&
        newUser.city != '' &&
        newUser.number != '' &&
        newUser.website != '') {
        if (check_box.checked == true) {
            location.assign("../contents/login.html")
        } else {
            alert("Kindly accept the terms and conditions")
        }
    } else {
        alert("Kindly fill all input to continue")
    }

    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    if (validateEmail(newUser.email)) {
        document.getElementById('email').style.border = 'green';
    } else {
        alert('invalid mail')
    }
    if (newUser.password.length < 7) {
        alert('password must be more than 7')
    } else {
        document.getElementById('password').style.border = 'green';
    }
    if (newUser.number != 11 && isNaN(newUser.number)) {
        alert('input must be digit')
    } else {
        document.getElementById('number').style.border = 'green'
    }

    function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    if (newUser.website != '' && validateUrl(newUser.website)) {
        document.getElementById('website').style.border = 'green'
    } else {
        alert('invalid url')
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
};
