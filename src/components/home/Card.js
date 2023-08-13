import React from 'react';
import { Link } from 'react-router-dom';

const Card = ( {logement} ) => {
   return (
      <div className='card-container'>
         <Link to={`/logements/${logement.id}`}>
            <img src={logement.cover} alt="" />
            <div className="card-title">
               <p>{logement.title}</p>
            </div>
         </Link>
      </div>
   );
};

export default Card;