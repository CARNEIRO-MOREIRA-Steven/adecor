"use client"
import React, { useState, useEffect } from "react";
import "./realisations.css";

const images = ["devant_maison.webp", "garde_corps_après.webp", "interieur_poutre_fin.webp"];

const Realisations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Vérifier si on est sur mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Changer l'image automatiquement sur mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isMobile]);

  return (
    <section className="container_realisations">
      <h2 className="realisations_title">Nos dernières réalisations</h2>
      <aside className="border_title_realisation"></aside>

      <div className={`container_image_realisation ${isMobile ? "mobile" : ""}`}>
        {isMobile ? (
          <>
            <button className="prev" onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}>❮</button>
            <div className="carousel-wrapper">
              <img loading="lazy"
                className="image_realisation"
                src={images[currentIndex]}
                alt={`Réalisation ${currentIndex + 1}`}
              />
            </div>
            <button className="next" onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}>❯</button>
          </>
        ) : (
          images.map((src, index) => (
            <img key={index} className="image_realisation" loading='lazy' src={src} alt={`Réalisation ${index + 1}`} />
          ))
        )}
      </div>
    </section>
  );
};

export default Realisations;
