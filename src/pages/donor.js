import React from 'react';
import NavigationBar from './navbar';
import Footer from './footer';
import Products from './products';
import ProductsDonor from './productsdonor';

const Donor = () => {
    return(
        <div>
            <NavigationBar  />
            <ProductsDonor />
            <Footer />
        </div>
    );

}

export default Donor;