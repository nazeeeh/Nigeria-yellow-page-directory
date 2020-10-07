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
    let user = userInfo.find(
        // comparing if form meet with what is inside local storage
        element => email == element.email && password == element.password
      
    );
    currentUser.push(user);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // validating log in details
    if (user) {
        // you can change this directory when hosting
        location.assign("../contents/userspage.html")
    } else {
        alert("incorrect username or password")
    }
}
document.getElementById("login-button").addEventListener("click", signUser);