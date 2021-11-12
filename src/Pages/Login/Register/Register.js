import { Alert, Container, Grid, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { registerUser } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const [notMatched, setNotMatched] = useState(false)
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        setNotMatched(false)
        if (registerData.password !== registerData.password2) {
            setNotMatched(true)
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();

    }


    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/2SGpBsD/pexels-vitaly-vlasov-1546333.jpg)`, height: '100vh' }}>
            <Container>
                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', height: '100vh', }} >
                    <Grid item xs={12} md={6} sx={{ backgroundColor: 'white', p: 5, minHeight: '50vh', borderRadius: 1 }}>
                        <Typography variant="h6" sx={{ color: 'navy' }}>Register</Typography>
                        <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                type="name"
                                name="name"
                                placeholder="Name"
                                variant="standard"
                                onBlur={handleOnBlur}
                                sx={{ pt: 3 }}
                                required
                                fullWidth
                            />
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                type="email"
                                name="email"
                                placeholder="Email"
                                variant="standard"
                                onBlur={handleOnBlur}
                                sx={{ pt: 3 }}
                                fullWidth
                            />
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                type="password"
                                name="password"
                                placeholder="Password"
                                variant="standard"
                                onBlur={handleOnBlur}
                                sx={{ pt: 3 }}
                                fullWidth
                            />
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                type="password"
                                name="password2"
                                placeholder="Re-Enter Password"
                                variant="standard"
                                onBlur={handleOnBlur}
                                sx={{ pt: 3 }}
                                fullWidth
                            />
                            {notMatched && <Alert severity="error">Password Didn't Match </Alert>}
                            <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, background: 'linear-gradient(90deg, rgba(2,0,36,1) 19%, rgba(9,83,121,1) 100%, rgba(0,212,255,1) 100%)' }}>Sign Up</Button>
                        </form>
                        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Already Registered?<Link to='/login'>Login</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;