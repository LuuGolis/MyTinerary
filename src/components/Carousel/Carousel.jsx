import React from 'react'

function Carousel() {
  const prev = () => {

  }

  const next = () => {

  }

  return (
    <div className='carousel container d-flex inline-block col-6'>
       <button onClick={prev}>{'<'}</button>

       <div className='img-container d-inline-block'>
       <div className='row mb-3'>
        <img className="col-6"   src="public\newyork.jpg" alt="" />
        <img className="col-6"   src="public\seoul.jpg" alt="" />
        </div>
        <div className='row'>
        <img className="col-6" src="public\singapore.jpg" alt="" />
        <img className="col-6" src="public\1561977573130.jpg" alt="" />
        </div>
       </div>
       <button onClick={next}>{'>'}</button>

    </div>
  )
}

export default Carousel