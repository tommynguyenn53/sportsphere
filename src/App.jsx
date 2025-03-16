import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About Us/About.jsx";
import Dropdown from "./Components/Dropdown/Dropdown.jsx";

function App(props) {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Dropdown/>


            <About/>
        </div>
    );
}

export default App;