import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ data }) => {
    const {
        name,
        img,
        country
    } = data
    return (
        <div className="col-4 card text-bg-dark">
            <img src={img} className="card-img" alt="..."></img>
            <div className="card-img-overlay">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <h5 className="card-title">{name}</h5>
                </span>
                <p className="card-text">{country}</p>
                <Link to="/CitiesDetail" className="btn btn-primary">View more</Link>
            </div>
        </div>
    )
}

export default Card