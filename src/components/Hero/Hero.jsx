import React from 'react'

function Hero() {
  return (
    <div>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-3 mx-5 mb-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Find your perfect trip, designed by insiders who know and love their cities!</h1>
        <p className="lead">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never beeen easier.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bolder">Find your journey</button>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero