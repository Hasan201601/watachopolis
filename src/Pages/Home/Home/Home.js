import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Banner></Banner>
        </div>
    );
};

export default Home;