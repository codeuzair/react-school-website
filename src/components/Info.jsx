import React from "react";
function Info() {
    return (
        <>
           <section>
        <div class="row">
          <div class="col-md-4">
            <div class="card" style={{ width: "25rem" }}>
              <div class="card-body">
                <h5 class="card-title">Register Online</h5>
                <p class="card-text">A quick and easy process</p>
                <a className="text-center mx-auto">Register Now </a>
              </div>
              <img src="/11.jpg" class="card-img-top" alt="Error" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style={{ width: "25rem" }}>
              <div class="card-body">
                <h5 class="card-title">Find a Campus</h5>
                <p class="card-text">Explore our campuses across Pakistan</p>
                <a className="text-center mx-auto">Campus Directory </a>
              </div>
              <img src="/12.jpg" class="card-img-top" alt="Error" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style={{ width: "25rem" }}>
              <div class="card-body">
                <h5 class="card-title">Pay Fee Online</h5>
                <p class="card-text">Fee Payment through debit/credit cards</p>
                <a className="text-center mx-auto">Pay Now</a>
              </div>
              <img src="/13.jpg" class="card-img-top" alt="Error" />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Info