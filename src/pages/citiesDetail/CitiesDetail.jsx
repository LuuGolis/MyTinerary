import NavbarMain from "../../components/Navbar/NavbarMain"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loadCityAsync } from "../../../redux/actions/citiesActions"

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
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
      </div>
    </div>
  </div>
    </div>
    </main>
    </div>
        )
  
}

export default CitiesDetail