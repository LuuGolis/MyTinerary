import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({data}) => {
  const {
    _id,
    name,
    img,
    country
    
} = data
  return (
    <div className='container'>
 <div className="card">
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{country}</p>
    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img class="card-img-bottom" src={img} alt="Card image cap"/>
</div>
<Link to={"/cities"} className="btn btn-dark">Go back</Link>
    </div>
  )
}

export default CityCard