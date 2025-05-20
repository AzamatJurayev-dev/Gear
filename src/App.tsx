import Navbar from "./components/Navbar"
import "./App.css"
import Main from "./components/Main"
import Popular  from "./components/Popular"
import Brands from "./components/Brands"
import Comer from "./components/Comer"
import Testimonial from "./components/Testimonial"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"

const App = () => {

  return (
    <>
      <Navbar/>
      <div className="lg:px-32 md:px-10 px-6">
      <Main/>
      <Popular/>
      <Brands/>
      <Comer/>
      <Testimonial/>
      <Subscribe/>
    </div>
    <Footer/>
    </>
  )
}

export default App