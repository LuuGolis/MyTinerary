import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/actions/userAction';



const navbarMain = () => {
  const user = useSelector( (store) => store.user.user)
  const dispatch = useDispatch()
    return (
      
      <div className="d-flex flex-wrap align-items-center justify-content-md-between py-1 mb-2">
      <nav>
        <img src="public\mytinerarylogo.png" width="200px" height="61px"/>
        <Link to="/" className="mx-2 text-decoration-none align-items-center mb-3 mb-md-0 me-md-auto text-dark">Home</Link>
        <Link to="/cities" className="mx-2 text-decoration-none align-items-center mb-3 mb-md-0 me-md-auto text-dark">Cities</Link>
        
        {
          user ? (
            <button href="#" id="signin" type="button" onClick={()=>dispatch(logOut())} className="btn btn-dark mx-2">Log out</button>
          ) :  
          ( <>
            <Link to="/signin"><button href="#" id="signin" type="button" className="btn btn-primary mx-2">Login</button></Link>
            <Link to="/signup"><button href="#" id="signup" type="button" className="btn btn-primary mx-2">SignUp</button></Link>
            </>
          )
        }      
        
        </nav>
    </div>
    )
  }
  
  export default navbarMain