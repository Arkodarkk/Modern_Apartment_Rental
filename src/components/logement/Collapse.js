import React, { useState } from 'react';
import arrowCollapse from '../../assets/images/arrow_collapse.svg';

const Collapse = ({ label, content, customClass }) => {

   const [isOpen, setIsOpen] = useState(false);

   const toggleCollapse = () => {
      setIsOpen(!isOpen);
   }

   return (
      <div className={`collapse-container ${customClass} ${isOpen ? 'open' : ''}`}>
         <div className={`collapse-header ${customClass}`} onClick={toggleCollapse} >
            <h3>{label}</h3>
            <img 
            src={arrowCollapse} 
            alt="Flèche de menu : ouvrir/fermer" 
            className={`arrow ${isOpen ? 'open' : ''}`}
            />
         </div>
         <div className={`collapse-content ${customClass} ${isOpen ? 'open' : ''}`}>
            {Array.isArray(content) ? (
                  <ul>
                     {content.map((item, index) => (
                        <li key={index}>{item}</li>
                     ))}
                  </ul>
               ) : (
                  /* Si le contenu n'est pas un tableau, affichez le contenu tel quel */
                  content
               )}
         </div>
      </div>
   );
};

export default Collapse;