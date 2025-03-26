import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About Us/About.jsx";
import Dropdown from "./Components/Dropdown/Dropdown.jsx";
import ResultsHandler from "./Components/ResultHandler/ResultsHandler.jsx"; // New component

function App() {
    const [selectedStat, setSelectedStat] = useState(null);

    return (
        <div className="App">
            <Navbar />
            <Hero />

            {/* Pass setSelectedStat to Dropdown */}
            <Dropdown setSelectedStat={setSelectedStat} />

            {/* ResultsHandler manages when to show Results */}
            <ResultsHandler selectedStat={selectedStat} />

            <About />
        </div>
    );
}

export default App;
