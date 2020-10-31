function Notifications() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');
        font-family:'Ubuntu',sans-serif;
        </style>

        <h3 style="margin-top: 6rem; font-size: 18px; font-weight: bold;line-height: 23px;">Notification</h3>
        <div style="height: 245px; width: 850px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/Woman Face.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative;">
                <p style="height: 33px; width: 437px;font-size: 18px;font-style: normal; margin-left: 2rem; font-weight: normal;line-height: 27px;letter-spacing: 0px;text-align: left;height: 33px;color: #FFFFFF;">${userInfo[i].businessName} is live on NYC</p>
                <h3 style="font-style: normal;font-weight: normal; font-size: 18px; margin-left: 2rem; line-height: 21px; color: #FFFFFF;">Welcome. <br><br>All necessary and required messages and notifications would fall in here, promos and offers also.</h3>
            </div>
        </div>

    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}
