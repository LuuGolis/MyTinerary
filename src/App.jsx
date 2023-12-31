import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home';
import Cities from './pages/cities/Cities';
import CitiesDetail from './pages/citiesDetail/CitiesDetail';
import SignIn from './pages/signIn/SignIn';
import './components/Footer/footer.css'
import './components/Carousel/carousel.css'


function App() {
  
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/cities" element={<Cities />} />
   <Route path="/citiesDetail" element={<CitiesDetail />} />
   <Route path="/signIn" element={<SignIn />} />
  </Routes>
  </>

  );
}

export default App
