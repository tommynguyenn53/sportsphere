import React from 'react';
import "./Hero.css"

function Hero(props) {
    return (
        <div className="hero" id="hero">
            <div className="text-area">
                <h1 className="heading">
                    Track Stats, <br/> Unleash Your Competitive Edge
                </h1>
                <p className="small-text">Stay ahead with real-time insights, expert analysis, and <br/> everything you need to follow your favourite sports.</p>
            </div>

            <div>
                <img src="../../../Test11.png"/>
            </div>
        </div>

    );
}

export default Hero;