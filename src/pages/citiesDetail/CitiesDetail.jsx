import NavbarMain from "../../components/Navbar/NavbarMain"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loadCityAsync } from "../../../redux/actions/citiesActions"
import { loadItineraryByCity } from "../../../redux/actions/itineraryAction"
import { Link } from 'react-router-dom'
import ItineraryAccordion from "../../components/ItineraryAccordion/ItineraryAccordion"

const CitiesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()

  const cityStore = useSelector((store) => store.cities.city)
  const itineraryStore = useSelector((store) => store.itineraries.itineraries)


  useEffect(() => {
    dispatch(loadCityAsync(id))
  }, [])

  return (
    <div className="app-layout">

      <header className="container app-header">
        <NavbarMain />
      </header>
      <main className="app-main">
        <div className="row container">
          <div className="px-4 py-5 my-5 text-center">

            {cityStore.name ? (<div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cityStore.name}</h5>
                  <p className="card-text">{cityStore.country}</p>
                </div>
                <img class="card-img-bottom" src={cityStore.img} alt="Card image cap" />
              </div>
              
            </div>
            ) : <h2> cargando</h2>

            }
            <button className="btn btn-dark" onClick={() => dispatch(loadItineraryByCity(id))}>View itinerary</button>
           
            {
              
              itineraryStore.map((itineraries) => <ItineraryAccordion key={itineraries._id} data={itineraries} />)
          
           
            }  
            </div>
          </div>
      
      </main>
    </div>
  )

}

export default CitiesDetail