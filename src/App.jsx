
import { Route,  Routes, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Projects from "./pages/projects"
import Contact from "./pages/contact"




function App() {
   const location = useLocation()


  return (
    <>
     <NavBar />
     <AnimatePresence mode = "wait">
      <Routes location={location} key ={location.pathname} >
          <Route index path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/contact" element = {<Contact />} />
      </Routes>
     </AnimatePresence>
    </>
  )
}

export default App
