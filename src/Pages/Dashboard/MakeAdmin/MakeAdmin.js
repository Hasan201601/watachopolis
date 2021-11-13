import { TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {
    const [successful, setSuccessful] = useState(false)
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleFormSubmit = e => {
        setSuccessful(false)
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setSuccessful(true)
                console.log(data)
            })
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
                    onBlur={handleOnBlur}
                ></TextField>
                <Button type="submit" size="large" variant="contained" sx={{ my: 2, fontWeight: 'bold' }}>Make Admin</Button>
                {successful && <Alert severity="success">Admin Made Successfully</Alert>}
            </Box>

        </Box >
    );
};

export default MakeAdmin;