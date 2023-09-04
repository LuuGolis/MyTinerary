import React from 'react'

function ItineraryAccordion({ data }) {

    const {
        _id,
        name,
        duration,
        price,
        hashtag,
        hashtag1,
        hashtag2,
      userName,
      userImg     
    } = data
  return (
    <div className='container'>
    <div className="accordion accordion-flush" id="accordionFlushExample"></div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        {name}
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <div>
                <p>Duration:{duration}</p>
                <p>Price:{price}</p>
                <p>#{hashtag}</p>
                <p>#{hashtag1}</p>
                <p>#{hashtag2}</p>
                <h5>{userName}</h5>
                <img src={userImg} alt="user img" height="150px" width="150px" />
            </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ItineraryAccordion