import { TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MakeAdmin = () => {
    const handleFormSubmit = e => {
        e.preventDefault()
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>

            <Box component="form" sx={{ textAlign: 'center', width: { xs: "90%", md: "50%" } }} onSubmit={handleFormSubmit}>
                <Typography variant="h5" sx={{ textAlign: 'center', my: 5 }}>Upgrade User Role To Admin</Typography>
                <TextField
                    variant="standard"
                    type="email"
                    placeholder="Type an Email Address"
                    hiddenLabel
                    fullWidth
                    sx={{ my: 1 }}
                ></TextField>
                <Button type="submit" size="large" variant="contained" sx={{ my: 2 }}>Make Admin</Button>
            </Box>
        </Box >
    );
};

export default MakeAdmin;