import React, { Fragment } from 'react';
import NavigationBar from './navbarIL';
import Footer from './footer';
import Products from './products';
import ProductsDonor from './productsdonor';

const Donor = () => {
    return(
        <Fragment>
            <NavigationBar  />
            <ProductsDonor />
            <Footer />
        </Fragment>
    );

}

export default Donor;