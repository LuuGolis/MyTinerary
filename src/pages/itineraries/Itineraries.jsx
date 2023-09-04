import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loadItineraries } from '../../../redux/actions/itinerariesActions'
import ItineraryAccordion from '../../components/ItineraryAccordion/ItineraryAccordion'

function Itineraries() {
    const dispatch = useDispatch()
    const itinerariesStore = useSelector((store) => store.itineraries.itineraries)
    console.log(itinerariesStore);

useEffect( () => {
    dispatch(loadItineraries())
}, [])

  return (
    <div className='container'>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        { itinerariesStore.map( itinerary => 
        <ItineraryAccordion key={itinerary._id} data={itinerary} />
            
            )}
            </div>
    </div>
  )
}

export default Itineraries