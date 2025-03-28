import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel() {
    const [positions, setPositions] = useState(["gallery-item-1", "gallery-item-2", "gallery-item-3", "gallery-item-4", "gallery-item-5"]);

    useEffect(() => {
        const updatePositions = (direction) => {
            setPositions((prevPositions) => {
                if (direction === "next") {
                    return [prevPositions[4], ...prevPositions.slice(0, 4)]; // Shift right
                } else {
                    return [...prevPositions.slice(1), prevPositions[0]]; // Shift left
                }
            });
        };

        const handleNextClick = () => updatePositions("next");
        const handlePrevClick = () => updatePositions("prev");

        const nextBtn = document.getElementById("next-btn");
        const prevBtn = document.getElementById("prev-btn");

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", handleNextClick);
            prevBtn.addEventListener("click", handlePrevClick);
        }

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