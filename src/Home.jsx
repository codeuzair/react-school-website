import React from "react";
import Carosel from "./components/Carosel";
import Company from "./components/Company"
import Footer from "./components/Footer"
import Head from "./components/Head"
import About from "./About"
import Info from "./components/Info"
import Gallery from "./components/Gallery"


function Home(){
    return(
        <>
                <Head/>
                <About/>
                <Info/>
                <Carosel/>
                <Company/>
                <Gallery/>
                <Footer/>

        </>
    )
}
export default Home;