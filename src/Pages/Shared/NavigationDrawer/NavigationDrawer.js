import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = '80vw';
const style = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    marginLeft: '15px'
}

function NavigationDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                sx={{ '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.main' } }}

            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" style={style}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" style={style}>Catalog</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/dashboard" style={style}>Dashboard</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/login" style={style}>Login</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton sx={{ ms: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default NavigationDrawer;