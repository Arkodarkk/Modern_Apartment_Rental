import React from 'react';
import pictureAbout from '../../assets/images/Image_source2.webp';

const AboutPicture = () => {
  return (
     <div className='picture-about-wrapper'>
        <img src={pictureAbout} alt="Vue d'une vallée serpentant entre des monts enneigés" />
     </div>
  );
};

export default AboutPicture;