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
import { flexbox } from "@mui/system";

const drawerWidth = '80vw';
const style = {
    fontFamily: 'Titillium Web',
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
                sx={{ '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(180deg, rgba(165,164,180,1) 0%, rgba(30,48,106,1) 0%, rgba(30,161,207,0.981127485173757) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }}

            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" style={style}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/catalog" style={style}>Catalog</Link>
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
                <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
        </>
    );
}
export default NavigationDrawer;