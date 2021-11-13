import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Button } from '@mui/material';

const NotFound = () => {
    return (
        <div style={{
            backgroundImage: `url(https://i.ibb.co/m06cVC1/2689520-ai.png)`,
            height: '100vh',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            objectFit: 'cover',
            textAlign: 'center'
        }}>
            <NavLink to="/home"><Button className="my-3">GO Home</Button></NavLink>

        </div>
    );
};

export default NotFound;