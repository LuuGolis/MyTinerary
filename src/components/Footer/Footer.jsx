import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div className="footerContainer d-flex flex-wrap justify-content-between align-items-center py-3 ">
    
  <ul className="nav col-sm-4 justify-content-center list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="#">
                <img src="./public/instagram.png" alt="instagram" width="24" height="24" />
            </a></li>
        <li className="ms-3"><a className="text-muted" href="#">
                <img src="./public/facebook.png" alt="facebook" width="24" height="24" />
            </a></li>
        <li className="ms-3"><a className="text-muted" href="#">
                <img src="./public/whatsapp.png" alt="whatsapp" width="24" height="24" />
            </a></li>
    </ul>
    <ul>
    <Link to="/cities" className="mx-2 text-decoration-none align-items-center mb-3 text-light fw-bold">Cities</Link>
    <Link to="/citiesDetail" className="mx-2 text-decoration-none align-items-center mb-3 text-light fw-bold">Cities Detail</Link>
    </ul>
    </div>

  )
}

export default Footer