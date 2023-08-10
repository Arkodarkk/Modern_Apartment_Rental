import React from 'react';
import logoWhite from '../assets/images/logo_white.png';

const Footer = () => {
   return (
      <footer>
         <div className="logo-footer-container">
            <img src={logoWhite} alt="" />
         </div>
         <div className="copyright-container">
            <p>© 2023 Kasa. All rights reserved</p>
         </div>
      </footer>
   );
};

export default Footer;