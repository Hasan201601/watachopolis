import { CircularProgress, Container, Grid, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { loginUser, googleLogin, isLoading } = useAuth()
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    console.log(loginData)
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogleLogin = () => {
        googleLogin(location, history)
    }
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/2SGpBsD/pexels-vitaly-vlasov-1546333.jpg)`, height: '100vh' }}>
            <Container>
                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', height: '100vh', }} >
                    <Grid item xs={12} md={6} sx={{ backgroundColor: 'white', p: 5, minHeight: '50vh', borderRadius: 1 }}>
                        <Typography variant="h6" sx={{ color: 'navy' }}>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
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
                            <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, background: 'linear-gradient(90deg, rgba(2,0,36,1) 19%, rgba(9,83,121,1) 100%, rgba(0,212,255,1) 100%)' }}>Login</Button>
                        </form>
                        <Typography variant="subtitle1" sx={{ textAlign: 'center', mt: 1 }}>
                            OR
                        </Typography>
                        <Button onClick={handleGoogleLogin} fullWidth variant="outlined" sx={{ mt: 1 }}><img src="https://i.ibb.co/HBDwDDK/google-logo.png" alt="" height="20px" style={{ display: 'inline-block', marginRight: '5px' }}></img> Sign In with Google</Button>
                        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                            Don't have an account?<Link to='/register'>Register</Link>
                        </Typography>
                    </Grid>

                </Grid>
            </Container >
        </div >
    );
};

export default Login;


