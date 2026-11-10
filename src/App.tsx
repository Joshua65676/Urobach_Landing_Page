import About from "./component/About"
import CTA from "./component/CTA"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import PortFolio from "./component/PortFolio"
import Review from "./component/Review"
import Service from "./component/Service"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <About/>
      <PortFolio />
      <Review />
      <CTA />
      <Footer />
    </>
  )
}

export default App
