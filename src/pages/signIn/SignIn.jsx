import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signIn } from '../../../redux/actions/userAction.js'

const SignIn = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const email = useRef(null)
  const password = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    const aux = [email, password]
    if (aux.some((field) => !field.current.value)) {
      alert('Field is required')
      console.log(aux);
    } else {

      const body = {

        email: email.current.value,
        password: password.current.value,

      }
      console.log(body);

      dispatch(signIn(body)).then((response) => {
        if (response.payload.success) {
          navigate("/")
        }
      })

    }
  }
  return (
    <div>
      <form className='col-6 d-flex justify-content-center flex row  m-5' onSubmit={handleSubmit}>
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

      </form>
    </div>
  )

}
export default SignIn