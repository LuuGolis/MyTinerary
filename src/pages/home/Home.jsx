import NavbarMain from "../../components/Navbar/NavbarMain"
import Carousel from "../../components/Carousel/Carousel"
const Home = () => {
  return (
    <div className="app-layout">

        <header className="container app-header">
        <NavbarMain />
        </header>
        <main className="app-main">
        <div className="d-flex">
        <div className="col-5 mx-4">
        <h5 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Find your perfect trip, designed by insiders who know and love their cities!</h5>
        <p className="lead">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never beeen easier.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">View more</button>
        
        </div>
      </div>
      
        <Carousel />
      
      
    </div>
        </main>
        <footer className="app-footer"></footer>
    </div>
  )
}

export default Home