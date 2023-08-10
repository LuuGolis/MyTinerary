import React from 'react'

function Footer() {
  return (
    
    <div className="footerContainer d-flex flex-wrap justify-content-between align-items-center py-3 sticky-bottom">
    
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
    </div>

  )
}

export default Footer