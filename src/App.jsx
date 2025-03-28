import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About Us/About.jsx";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import ResultsHandler from "./components/ResultHandler/ResultsHandler.jsx";
import InfiniteLogoCarousel from "./Components/InfiniteLogoCarousel/InfiniteLogoCarousel.jsx";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel.jsx"; // New component

function App() {
    const [selectedStat, setSelectedStat] = useState(null);

    return (
        <div className="App">
            <Navbar />
            <Hero />
    <InfiniteLogoCarousel/>

            {/* Pass setSelectedStat to Dropdown */}
            <Dropdown setSelectedStat={setSelectedStat} />

            {/* ResultsHandler manages when to show Results */}
            <ResultsHandler selectedStat={selectedStat} />
            <ImageCarousel/>

            <About />
        </div>
    );
}

export default App;