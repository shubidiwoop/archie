import React from 'react';
import NavigationBar from './navbar';
import ControlledCarousel from './carousel';
import FooterPage from './footer';
import Cards from './cards';

const Home = () => {
    return(
        <div>
            <NavigationBar  />
            <ControlledCarousel  />
            <Cards />
            <FooterPage />
        </div>
    );

}

export default Home;