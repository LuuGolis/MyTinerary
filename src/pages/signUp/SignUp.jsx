import React, { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signUp } from "../../../redux/actions/userAction.js"
import Footer from "../../components/Footer/Footer"
import NavbarMain from "../../components/Navbar/NavbarMain"

const SignUp = () => {
  const [countries, setCountries] = useState([])
  const dispatch = useDispatch()

  

  const name = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const country = useRef(null)
  const img = useRef(null)

  useEffect(() => {
    axios('https://restcountries.com/v3.1/all?fields=name')
      .then(({ data }) => setCountries(data.map(country => country.name.common)))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const aux = [name, lastName, email, password]
    console.log(aux);
    if (aux.some((field) => !field.current.value)) {
      alert('Field is required')
    }else{

    const body = {
      name: name.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
     /*  country: country.current.value,
      img: img.current.value */
    }
    console.log(body);
    dispatch(signUp(body))
  }
  }

  return (
    
    <div className="app-layout">
       <header className="container app-header">
        <NavbarMain />
      </header>
      <form className='col-6 d-flex justify-content-center flex row  m-5' onSubmit={handleSubmit}>
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          
          <label >
            {" "}
            Name:
            <input type="text" className="form-control"  ref={name} />
            </label>
         
          <label>
            {" "}
            Last Name:

            <input type="text" className="form-control"  ref={lastName} />
</label>
          
          <label >
            {" "}
            Email address
            <input type="email" className="form-control"  placeholder="name@example.com" ref={email} />
        </label>
          
          <label>
            {" "}
            Password
            <input type="password" className="form-control"  placeholder="Password" ref={password} />
        </label>

        <select className="form-select" aria-label="Default select example" ref={country}>
          <option>Country</option>
          {countries.length > 0 && countries.map(country => <option key={`opt-country-${country}`} value={`${country}`}>{country}</option>)}

        </select>

        
          
          <label>
            {" "}
            Image:
            <input type="text" className="form-control mb-5"  ref={img} />
            </label>


        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>

      </form>
      <footer className="app-footer">

        <Footer />
      </footer>
    </div>
  )
}

export default SignUp