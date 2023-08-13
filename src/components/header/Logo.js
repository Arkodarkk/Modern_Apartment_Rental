import React from 'react';
import logo from "../../assets/images/Logo.png";

const Logo = () => {
   return (
      <div>
         <img style={{height: "68px", width: "210px"}} src={logo} alt="Logo de Kasa" />
      </div>
   );
};

export default Logo;