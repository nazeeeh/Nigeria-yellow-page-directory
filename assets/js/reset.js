    function resetPassword(){

        var code = document.getElementById("resetcode").value
        var password = document.getElementById("password").value 
        var conPassword =document.getElementById("cpassword").value

        function changeLocation(){
            location.href = "../contents/login.html";
        }
        function checkSuccess(){
            if(code.length != 6 && password === conPassword){
                alert("please insert the 6-digit code sent")
                if(password.length > 8){
                document.getElementById("resetcode").style.borderColor = 'red';
                document.getElementById("password").style.borderColor = 'green';
                document.getElementById("cpassword").style.borderColor = 'green';
                alert("strong password")
                }
                else if (password.length === 8){
                document.getElementById("resetcode").style.borderColor = 'red';
                document.getElementById("password").style.borderColor = 'yellow';
                document.getElementById("cpassword").style.borderColor = 'yellow';
                alert("fair password")
                }
                else{
                 document.getElementById("resetcode").style.borderColor = 'red';
                document.getElementById("password").style.borderColor = 'red';
                document.getElementById("cpassword").style.borderColor = 'red';
                alert("Your password should contain at least 8 characters.")
                }
            }
            else if(code.length ===6 && password === conPassword){
                if (password.length > 8){
                document.getElementById("resetcode").style.borderColor = 'green';
                document.getElementById("password").style.borderColor = 'green';
                document.getElementById("cpassword").style.borderColor = 'green';
                alert("strong password")
                alert("Password has been successfully changed")
                setTimeout(changeLocation, 1000)
                }
                else if (password.length === 8){
                document.getElementById("resetcode").style.borderColor = 'green';
                document.getElementById("password").style.borderColor = 'yellow';
                document.getElementById("cpassword").style.borderColor = 'yellow';
                alert("fair password")
                alert("Password has been successfully changed")
                setTimeout(changeLocation, 1000)
                }
                else{
                    document.getElementById("resetcode").style.borderColor = 'red';
                   document.getElementById("password").style.borderColor = 'red';
                   document.getElementById("cpassword").style.borderColor = 'red';
                   alert("Your password should contain at least 8 characters.")
                   }
            }
            else if(code.length === 6 && password != conPassword){
                document.getElementById("resetcode").style.borderColor = 'green';
                document.getElementById("password").style.borderColor = 'red';
                document.getElementById("cpassword").style.borderColor = 'red';
                alert("Password mismatch. Ensure that both passwords are identical")
            }
            else{
                if(code.length != 6 && password != conPassword){
                    alert("Incorrect code and password mismatch")
                }
            }
            
    }
    

    checkSuccess()
    
    
    
   
}   