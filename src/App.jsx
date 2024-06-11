import EventSection from "./components/EventSection"
import Team from "./Team"
import Feedback from "./components/Feedback"
import Contact from "./Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/navBar/NavBar"
import Mentor from "./components/Mentor"
import Hero from "./components/Hero"
import Omooro from "./components/Omooro"


function App() {

  return (
    <>
    <Header/>

    <Team/>

    <Mentor />
    <Footer/>
    <NavBar/>

    <Hero />

    <Footer/>
    <EventSection/>
    <Feedback/>
    <Contact/>
    <Omooro/>
    
    </>
  )
}

export default App
