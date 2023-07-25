import React from "react";
const style = {
    width: "100%",
    height: "250px",
}
function Company() {
    return (
        <>
            <section>
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            {/* <img style={style} src="./M-4.jpg" alt="Error" /> */}
                        </div>
                        <div class="row extra">
                            <div class="col-md-4 ">
                                <img src="./M-5.png" alt="Error" />
                            </div>
                            <div class="col-md-4">
                                <img style={{ paddingBottom: "30px" }} src="./M-2.jpg" alt="Error" />
                            </div>
                            <div class="col-md-4">
                                <img src="./M-3.png" alt="Error" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Company