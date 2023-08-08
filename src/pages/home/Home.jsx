import NavbarMain from "../../components/Navbar/NavbarMain"
import Carousel from "../../components/Carousel/Carousel"
const Home = () => {
  return (
    <div className="app-layout">

        <header className="container app-header">
        <NavbarMain />
        </header>
        <main className="app-main">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ms-0">
      <div className="col-8 col-sm-6 col-lg-4">
        <Carousel />
      </div>
      <div className="col-lg-6">
        <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Find your perfect trip, designed by insiders who know and love their cities!</h3>
        <p className="lead">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary oprions, planning your next trip has never beeen easier.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">View more</button>
        
        </div>
      </div>
    </div>
        </main>
        <footer className="app-footer"></footer>
    </div>
  )
}

export default Home