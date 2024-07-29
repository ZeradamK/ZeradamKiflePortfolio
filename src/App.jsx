import Navbar from "./components/Navbar/Navbar.jsx";
import {useEffect} from "react";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import TechnologiesSection from "./components/TechnologiesSection/TechnologiesSection.jsx";
import Projects from "./components/Projects-one/Projects.jsx";
import ExperiancePage from "./components/ExperiancePage/ExperiancePage.jsx";
const App =()=>{
    return(
        <div id="root">
            <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#050505] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,120,120,0.5),rgba(255,255,255,0))]"></div>
            <Navbar/>
            <LandingPage/>
            <ExperiancePage/>

            <Projects/>
            <div className="overlay top"></div>
            <div className="overlay bottom"></div>
        </div>
    )
}

export default App;