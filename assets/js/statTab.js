function statTab() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `
        <div class="stat-container">
                <div class="top-container">
                    <div class="left-top">
                        <img src="/assets/img/Wcelebrate.png" alt=""> <br>
                        <number class="number">42,456</number>
                        <br> <br>
                        <p>Total search <h4>Yellow Page Stats</h4>made on ${userInfo[i].businessName} <br> <br> 100 <span class="visitor">new visitors</span> for the new week</p>
                    </div>
                    <div class="right-top">
                        <!--  -->
                        <img src="../assets/img/yellowchart" alt="">
                    </div>
                </div>
                <hr>
                <hr>
                <div class="bottom-container">
                    <div class="left-bottom">
                        <img src="/assets/img/Man thumb.png" alt=""> <br>
                        <number class="number" >42,456</number>
                        <br> <br>
                        <p>Total search made on <br>${userInfo[i].businessName} <strong>Events</strong> <br> 120 <span class="visitor">new visitors</span> for the new week</p>

                    </div>
                    <div class="right-bottom">
                        <img src="/assets/img/gan.jpeg" alt="">
                    </div>

                </div>
            </div>
`
    }
    document.getElementById("registration-form").innerHTML = userDetails

}
