import React from 'react';
import Header from '../components/Header';
import PictureHeader from '../components/TagLine';
import Footer from '../components/Footer';

const Home = () => {
   return (
      <div className='home-container'>
         <Header />
         <PictureHeader />
         <Footer />
      </div>
   );
};

export default Home;