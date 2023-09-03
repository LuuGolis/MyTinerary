import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import NavbarMain from "../../components/Navbar/NavbarMain"
import { getAllCities } from "../../../service/cityService.js"
import { useDispatch, useSelector } from "react-redux"
import { loadCities, filterCities, loadCitiesAsync } from '../../../redux/actions/citiesActions.js'

const Cities = () => {
  const params = useParams()

//const [cities, setCities] = useState([])
const searchInput = useRef(null)

const dispatch = useDispatch()

const citiesStore = useSelector( store => store.cities.filteredCities)
console.log(citiesStore);

useEffect(() =>{
getAllCities().then((cities) => {
  dispatch(loadCitiesAsync());
  //getAllCities().then((cities) => {
    //setCities(cities); 
})
}, [])

const handleSearch = ()=>{

 
 /*  let query =   `?`
   if(search){
    query+="name="+search
   }
   console.log(query);
   //getAllCities(query).then(/*setCities)*/
   dispatch(filterCities( searchInput.current.value))}

  return (
    <div className="app-layout">

      <header className="container app-header">
        <NavbarMain />
      </header>
      <main className="app-main">
        <div className="row container">
          <div className="col">
          <h1>Cities</h1>
          <p>Collection of the most beautiful places and experiences</p>
          </div>
        </div>
        
        <div className="row container d-flex justify-content-center my-4">
        <div className="col-4 ">
          <div className="input-group w-60"><span className="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                </path></svg></span><input onInput={handleSearch} ref={searchInput} id="buscador" type="text" className="form-control" placeholder="Search" aria-label="Input group example" aria-describedby="basic-addon1"></input></div> </div>
        </div>

        <div className="row container ">
        {
  citiesStore.map((city) => <Card key={city._id} data={city} /> )
}
   
        </div>
        
      </main>
      <footer className="app-footer">

        <Footer />
      </footer>
    </div>
  )
}

export default Cities