import React from 'react';
import Results from "../TableResults/Results.jsx";

function ResultsHandler({ selectedStat }) {
    return (
        <>
            {selectedStat === "fastest lap at a given circuit" && <Results />}
        </>
    );
}

export default ResultsHandler;
