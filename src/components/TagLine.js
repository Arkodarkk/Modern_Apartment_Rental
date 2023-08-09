 import React from 'react';
 import pictureHeader from '../assets/images/Image_source1.webp';
 
 const TagLine = () => {
   return (
      <div className='picture-wrapper'>
         <img src={pictureHeader} alt="Paysage côtier avec des falaises escarpées, de la végétation et la mer" />
         <h2>Chez vous, partout et ailleurs</h2>
      </div>
   );
 };
 
 export default TagLine;