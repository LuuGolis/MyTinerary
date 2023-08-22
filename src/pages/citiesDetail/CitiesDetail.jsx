import NavbarMain from "../../components/Navbar/NavbarMain"

const CitiesDetail = () => {
  return (
    <div className="app-layout">

    <header className="container app-header">
      <NavbarMain />
    </header>
    <main className="app-main">
      <div className="row container">
      <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
      </div>
    </div>
  </div>
    </div>
    </main>
    </div>
        
  )
}

export default CitiesDetail