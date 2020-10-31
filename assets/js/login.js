// const mainMenu = document.querySelector('.content-2');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');



// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    openMenu.style.display = 'none';
}

function close() {
    mainMenu.style.top = '-100%';
    openMenu.style.display = 'initial';

}

//  validating form from local storage
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (userInfo == null) {
    userInfo = [];
}

if (currentUser == null) {
    currentUser = [];
}
// local storage user info function
const signUser = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

      //    Admin info

    let adminEmail = "admin@gmail.com";
    let adminPassword = "1234567";
    
    let user = userInfo.find(
        // comparing if form meet with what is inside local storage
        element => email == element.email && password == element.password
      
    );
    currentUser.push(user);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // validating log in details
    if (user) {
        // you can change this directory when hosting
        swal({
            text: "Login successful!",
            icon: "success",
            button: "OK",
          });
          document.getElementById("login-button").innerHTML = '<img src="/assets/img/ajax-loader.gif">';
          setTimeout(() => {
              document.getElementById('login-button').innerHTML = '';
          },4800 );
          setTimeout(() => {
           window.location.assign("../contents/userspagelatest.html");
        },3500 );
         
    } else {
        swal({
            text: "incorrect username or password!!",
            icon: "error",
            button: "OK",
          });
        // alert("incorrect username or password")
    }
}
document.getElementById("login-button").addEventListener("click", signUser);