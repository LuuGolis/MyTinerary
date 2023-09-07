import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    console.log(data);
  return (
 
    <div className='container'>
         <div id="accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {name}
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
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