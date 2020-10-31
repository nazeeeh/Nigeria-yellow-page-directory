function updatePackage() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `
        <div class="title">
            <h3> Pricing </h3>
            <p> Our prices are fashioned to cater for both the economical and others with taste, be rest assured payments are seamless and quick. </p>

        </div>

        <div class="pricing-table">
            <div class="pricing-card">
                <h3 class="pricing-card-header"> Free Trial</h3>
                <div class="price"><sup>N</sup>0<span>/month</span></div>
                <ul>
                    <li><strong>1</strong> Advert per week (write-up)</li>
                    <li><strong>No</strong> Monthly Analytic Report</li>
                    <li>Review Listing</li>
                    <li><strong>2</strong> Photos</li>
                    <li><strong>No</strong> Video Advert</li>
                </ul>
                <a href="#" class="order-btn"> Select Plan</a>
            </div>

            <div class="pricing-card">
                <h3 class="pricing-card-header"> Regular</h3>
                <div class="price"><sup>N</sup>5000<span>/month</span></div>
                <ul>
                    <li><strong>2</strong> Adverts per week (write-up)</li>
                    <li>Monthly Analytic Report</li>
                    <li>Review Listing</li>
                    <li>Photo Gallery</li>
                    <li><strong>No</strong> Video Advert</li>
                </ul>
                <a href="#" class="order-btn"> Select Plan</a>
            </div>

            <div class="pricing-card">
                <h3 class="pricing-card-header"> Premium</h3>
                <div class="price"><sup>N</sup>10000<span>/month</span></div>
                <ul>
                    <li><strong>5</strong> Adverts per week</li>
                    <li>Monthly Analytic Report</li>
                    <li>Review Listing</li>
                    <li>Photo Gallery</li>
                    <li>Video Advert</li>
                </ul>
                <a href="#" class="order-btn"> Select Plan</a>
            </div>




        </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}

