import { Link } from 'react-router-dom';
const navbarMain = () => {
    return (
      
      <div className="d-flex flex-wrap align-items-center justify-content-md-between py-1 mb-2">
      <nav>
        <img src="public\mytinerarylogo.png" width="200px" height="61px"/>
        <Link to="/" className="mx-2 text-decoration-none align-items-center mb-3 mb-md-0 me-md-auto text-dark">Home</Link>
        <Link to="/cities" className="mx-2 text-decoration-none align-items-center mb-3 mb-md-0 me-md-auto text-dark">Cities</Link>
        <Link to="/signIn"><button href="#" id="login" type="button" className="btn btn-primary mx-2">Login</button></Link>
      </nav>
    </div>
    )
  }
  
  export default navbarMain