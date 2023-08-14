import React from 'react';
import starActive from '../../assets/images/star-active.svg'
import starInactive from '../../assets/images/star-inactive.svg'

const Rating = ({ rating }) => {
   const notation = parseInt(rating);

   const stars = [];
   for (let i = 0; i < 5; i++) {
      if (i < notation) {
         stars.push(<img key={i} src={starActive} alt="Étoile pleine" />);
      } else {
         stars.push(<img key={i} src={starInactive} alt="Étoile vide" />);
      }
   }

   return (
      <div>
         {stars}
      </div>
   );
};

export default Rating;