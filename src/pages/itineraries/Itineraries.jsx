import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { loadItineraryByCity } from '../../../redux/actions/itineraryAction.js'
import ItineraryAccordion from '../../components/ItineraryAccordion/ItineraryAccordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/itineraries/itineraries.css'

function Itineraries() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const itineraryStore = useSelector((store) => store.itineraries.itineraries)
    console.log(itineraryStore);

    useEffect(() => {
        dispatch(loadItineraryByCity(id))
    }, [])

    return (
        <div className='container'>

            {itineraryStore.name ?
                /* ( <ItineraryAccordion key={itinerary._id} data={itinerary} />
                     ) */
                (<div className="col-lg-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{itineraryStore.name}</h5>

                        </div>

                    </div>
                </div>
                )
                : <h2>cargando</h2>
            }
        </div>

    )
}
export default Itineraries