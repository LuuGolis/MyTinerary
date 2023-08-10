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
  <Home />
  <Cities />
  <CitiesDetail />
  <SignIn />
  </>
  );
}

export default App
