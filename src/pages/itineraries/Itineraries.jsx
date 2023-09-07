import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loadItineraries } from '../../../redux/actions/itinerariesActions'
import ItineraryAccordion from '../../components/ItineraryAccordion/ItineraryAccordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/itineraries/itineraries.css'

function Itineraries() {
    const dispatch = useDispatch()
    const itinerariesStore = useSelector((store) => store.itineraries.itineraries)
    console.log(itinerariesStore);

useEffect( () => {
    dispatch(loadItineraries())
}, [])

  return (
    <div className='container'>
    
        { itinerariesStore.map( itinerary => 
        <ItineraryAccordion key={itinerary._id} data={itinerary} />
            
            )}
            </div>
   
  )
}

export default Itineraries