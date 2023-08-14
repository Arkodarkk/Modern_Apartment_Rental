import React from 'react';
import Rating from './Rating';

const LogementInfos = ({ appartement }) => {
   const tags = appartement.tags;
   
   return (
      <div className='infos-container'>
         <div className="infos-left-container">
            <div className="title-loc-wrapper">
               <h2>{appartement.title}</h2>
               <p>{appartement.location}</p>
            </div>
            <ul className="tags-wrapper">
               {tags &&
                  tags.map((tag, index) => (
                     <li key={index}>{tag}</li>
               ))}
            </ul>
         </div>
         <div className="infos-right-container">
            <div className="host-wrapper">
               <h3>{appartement.host.name}</h3>
               <div className='host-pic-wrapper'>
                  <img src={appartement.host.picture} alt={appartement.host.name} />
               </div>
            </div>
            <Rating rating={appartement.rating} />
         </div>
      </div>
   );
};

export default LogementInfos;