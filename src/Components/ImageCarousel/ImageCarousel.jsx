import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel() {
    // State to store the class names for the positions of the images in the carousel
    const [positions, setPositions] = useState(["gallery-item-1", "gallery-item-2", "gallery-item-3", "gallery-item-4", "gallery-item-5"]);

    useEffect(() => {
        // Function to update the positions of the images in the carousel
        const updatePositions = (direction) => {
            setPositions((prevPositions) => {
                if (direction === "next") {
                    // Shift positions to the right
                    return [prevPositions[4], ...prevPositions.slice(0, 4)];
                } else {
                    // Shift positions to the left
                    return [...prevPositions.slice(1), prevPositions[0]];
                }
            });
        };

        // Event handlers for the next and previous buttons
        const handleNextClick = () => updatePositions("next");
        const handlePrevClick = () => updatePositions("prev");

        // Get next and previous buttons by their IDs
        const nextBtn = document.getElementById("next-btn");
        const prevBtn = document.getElementById("prev-btn");

        // Add event listeners to the buttons if they exist
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", handleNextClick);
            prevBtn.addEventListener("click", handlePrevClick);
        }

        // Cleanup event listeners when the component is unmounted
        return () => {
            if (nextBtn && prevBtn) {
                nextBtn.removeEventListener("click", handleNextClick);
                prevBtn.removeEventListener("click", handlePrevClick);
            }
        };
    }, []);

    return (
        <div className="gallery">
            <div className="gallery-container">
                {/* Map through the images and assign class names based on their positions */}
                {["Carousel_Image_3.jpg", "Carousel_Image_1.jpg", "Carousel_Image_2.png", "Carousel_Image_4.jpg", "Carousel_Image_5_Updated.png"].map((image, index) => (
                    <img key={index} src={`/${image}`} alt="" className={`gallery-item ${positions[index]}`} />
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="gallery-controls">
                <button id="prev-btn">❮</button>
                <button id="next-btn">❯</button>
            </div>
        </div>
    );
}

export default ImageCarousel;