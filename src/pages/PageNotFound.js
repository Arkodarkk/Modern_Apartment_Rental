import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
   return (
      <div className='pnf-container'>
         <Header />
         <div className="pnf-body-container">
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <NavLink to="/">
               <p>Retourner sur la page d'accueil</p>
            </NavLink>
         </div>
         <Footer />
      </div>
   );
};

export default PageNotFound;