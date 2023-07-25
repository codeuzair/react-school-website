import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbarr from "./components/Navbarr"
import Home from "./Home"
import Error404 from "./Error404"
import About from "./About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Navbarr />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/Home" Component={Home} />
            <Route exact path="/Error404" Component={Error404} />
            <Route exact path="/about" Component={About} />
            {/* <Route exact path="/admission" Component={Admission} /> */}
            <Route path="*" Component={Error404}/>
          </Routes>
    
    
    </>
  )
}

export default App
