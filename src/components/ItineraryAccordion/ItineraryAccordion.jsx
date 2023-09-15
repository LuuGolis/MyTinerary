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
          <div className="accordion">
  <div className="accordion-item">
    
      <h5 className="accordion-header" id="headingOne">
        <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {name}
        </button>
      </h5>
    

    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="card-body">
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