import { useState } from "react";
import "./css/CarruselTexto2.css";

const CarruselTexto2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dates = [
    {
      date: "2003",
      description: "Some description for 2003",
    },
    {
      date: "2008",
      description: "Some description for 2008",
    },
    {
      date: "2023",
      description: "Some description for 2023",
    },
    {
      date: "2050",
      description: "Some description for 2050",
    },
    {
      date: "2077",
      description: "Some description for 2077",
    },
  ];

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % dates.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + dates.length) % dates.length);
  };

  return (
    <div className="carousel-container">
      <div className="date-container">
        <h1 className="current-date">{dates[currentIndex].date}</h1>
        {currentIndex + 1 < dates.length && (
          <h2 className="next-date">{dates[currentIndex + 1].date}</h2>
        )}
      </div>
      <div className="description-container">
        <p className="description">{dates[currentIndex].description}</p>
      </div>
      <div className="buttons-container">
        <button className="prev-button" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CarruselTexto2;
