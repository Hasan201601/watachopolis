import { Typography } from '@mui/material';
import React from 'react';

const CatalogBanner = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/GWtszNt/background-footer.jpg)', height: '35vh', display: 'flex', alignItems: 'end', justifyContent: 'center', backgroundAttachment: 'fixed' }}>
            <Typography variant="h4" className="Titillium" sx={{ color: 'white', width: { md: '40%', sm: '80%' }, pb: 4 }}>We Thrive to Build a Quality Collection House. See Our Latest Collections</Typography>
        </div >
    );
};

export default CatalogBanner;