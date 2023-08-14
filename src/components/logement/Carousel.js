import React, { useState } from 'react';
import leftArrow from '../../assets/images/left_arrow.svg'
import rightArrow from '../../assets/images/right_arrow.svg'

const Carousel = ({ appartement }) => {
   const [index, setIndex] = useState(0);
   const pictures = appartement.pictures

   const handlePrev = () => {
      if (index === 0) {
         setIndex(pictures.length - 1);
      } else {
         setIndex(index - 1);
      }
   };
   
   const handleNext = () => {
      if (index < pictures.length - 1) {
         setIndex(index + 1);
      } else {
         setIndex(0);
      }
   };

   return (
      <div className='carousel-container'>
         <img className='visible-image' src={pictures[index]} alt={`${appartement.title} #${index + 1}`} />
         <img className='carousel-arrows left-arrow' src={leftArrow} alt={`Bouton du carousel pour afficher l'image précédente`} onClick={handlePrev} />
         <img className='carousel-arrows right-arrow' src={rightArrow} alt={`Bouton du carousel pour afficher l'image suivante`} onClick={handleNext} />
         <p className="carousel-position">{`${index + 1}/${pictures.length}`}</p>
         {/* {pictures &&
            pictures.map((picture, index) => 
               <img key={`Carousel #${index}`} src={picture} alt={`Photo ${index + 1} - ${appartement.title}`} />
         )} */}
      </div>
   );
};

export default Carousel;