import NavbarMain from "../../components/Navbar/NavbarMain"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loadCityAsync } from "../../../redux/actions/citiesActions"
import { Link } from 'react-router-dom'

const CitiesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
    const city = useSelector((store) => store.cities.city )

    useEffect( () =>{
      dispatch( loadCityAsync(id))
    },[])
  
  return (
    <div className="app-layout">

    <header className="container app-header">
      <NavbarMain />
    </header>
    <main className="app-main">
      <div className="row container">
      <div className="px-4 py-5 my-5 text-center">
    {city ? <h1 className="display-5 fw-bold text-body-emphasis">{city.name}</h1> : <h2> cargando</h2>}
 {/*       <div className="col-lg-6 mx-auto">
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{city.name}</h5>
    <p className="card-text">{city.country}</p>
    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img class="card-img-bottom" src={city.img} alt="Card image cap"/>
</div>
<Link to={"/cities"} className="btn btn-dark">Go back</Link>
    </div> 
    </div>
  </div>
 */}
 <Link to={"/cities"} className="btn btn-dark">Go back</Link>
 </div>
 </div>
    </main>
    </div>
        )
  
}

export default CitiesDetail