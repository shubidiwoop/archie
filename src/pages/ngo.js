import React from 'react';
import NavigationBar from './navbarIL';
import FooterPage from './footer';
import NgoFooter from './ngofooter';
import Products from './products';


const Ngo = () => {
    return(
        <div>
            <NavigationBar  />
            <Products />
            <NgoFooter />
        </div>
    );

}

export default Ngo;