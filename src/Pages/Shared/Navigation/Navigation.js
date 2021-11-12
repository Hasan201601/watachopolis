import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    Button,
} from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import useAuth from "../../../Hooks/useAuth";
import './Navigation.css'



const Navigation = () => {
    const [navigation, setNavigation] = useState(false)
    const { user, logOut } = useAuth()

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const style = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
        marginLeft: '15px'
    }
    const locationStory = window.location.pathname;
    console.log(locationStory)
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavigation(true)
        }
        else if (locationStory === "/catalog") {
            setNavigation(false)
        }
        else {
            setNavigation(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation="0" className={navigation ? 'navColor' : 'navTransparent'} position="fixed">
                <CssBaseline />
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h4" >
                        Watchopolis

                    </Typography>
                    {isMobile ? (
                        <NavigationDrawer style={{ width: '80vw' }} />
                    ) : (
                        <div >
                            <Link to="/" style={style}>
                                Home
                            </Link>
                            <Link to="/catalog" style={style}>
                                Catalog
                            </Link>
                            <Link to="/dashboard" style={style}>
                                Dashboard
                            </Link>
                            {
                                user?.email ?
                                    <Button onClick={logOut} variant="contained">LogOut</Button> :
                                    <Link to="/login" style={style}>
                                        Login
                                    </Link>
                            }
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>


    );
};

export default Navigation;