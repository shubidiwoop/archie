import React from 'react';
import NavigationBar from './navbar';
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