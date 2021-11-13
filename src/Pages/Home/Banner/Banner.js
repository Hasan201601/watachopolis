import React from 'react';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    const imgUrl = "https://i.ibb.co/Kr2bG02/slider-1.jpg"
    return (
        <div className="Titillium" style={{ backgroundImage: `url(${imgUrl})`, height: '90vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <Container style={{ height: '100%' }}>
                <div className="d-flex align-items-center justify-content-start" style={{ height: '100%' }}>
                    <div>
                        <h2 className="text-white">New Arrivals</h2>
                        <h1 className="text-white">Our Best Collections</h1>
                        <Link to="/catalog" style={{ textDecoration: 'none' }}> <Button className="Titillium" variant="outlined" size="large">Explore </Button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;


