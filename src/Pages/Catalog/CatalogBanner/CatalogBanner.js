import { Typography } from '@mui/material';
import React from 'react';

const CatalogBanner = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/GWtszNt/background-footer.jpg)', height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundAttachment: 'fixed' }}>
            <Typography variant="h4" className="Titillium" sx={{ color: 'white', width: { md: '40%', sm: '80%' }, textAlign: 'center', fontSize: { md: '1.6rem', sm: '1.2rem', xs: '14px' }, pt: 5 }}>We Thrive to Build a Quality Collection House. See Our Latest Collections</Typography>
        </div >
    );
};

export default CatalogBanner;