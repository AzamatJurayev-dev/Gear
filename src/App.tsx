import { HeaderView } from "./components/Navbar"
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
    <div className="mx-32">
      <HeaderView/>
      <Main/>
      <Popular/>
      <Brands/>
      <Comer/>
      <Testimonial/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App