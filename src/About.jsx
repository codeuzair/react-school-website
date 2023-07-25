import React from "react";
function About() {
    return (
        <>
            <section class="about ">
                <div class="row ">
                    <div class="col-md-6">
                    <img src="./images/main.jpg" alt="Error"/>    
                    </div>
                    <div class="col-md-6">
                        <h3 className="text-center pt-5">About Us</h3>
                        <hr class="mx-auto bg-info" />
                        <br />
                        <p>
                            Established in Swabi in 1978, <span> Swabi Model School & College </span>  is today one of the largest private school networks across the globe. Having more than 500 schools with over 150,000 students, we continue to expand our reach in other countries including United Arab Emirates, Malaysia, Philippines, Oman and Saudi Arabia, to meet the demands for quality education as well as to ensure a strong global presence.
                        </p>
                    </div>
                </div>
                <br />
            </section>
        </>
    )
}
export default About;