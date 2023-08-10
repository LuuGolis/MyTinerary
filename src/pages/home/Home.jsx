import NavbarMain from "../../components/Navbar/NavbarMain"
import Carousel from "../../components/Carousel/Carousel"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
const Home = () => {
  return (
    <div className="app-layout">

        <header className="container app-header">
        <NavbarMain />
        </header>
        <main className="app-main">
        <section className="d-flex">
        <Hero/>
    </section>
    <section className="mb-5 d-flex justify-content-center">
    <Carousel />
    </section>
        </main>
        <footer className="app-footer">
        <Footer/>
        </footer>
    </div>
  )
}

export default Home