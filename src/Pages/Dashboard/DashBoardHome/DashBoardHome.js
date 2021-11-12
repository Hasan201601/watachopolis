import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Home } from '@mui/icons-material';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import AddNewWatch from '../AddNewWatch/AddNewWatch';
import ManageWatches from '../ManageWatches/ManageWatches';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth';
import { Container, Grid, Paper } from '@mui/material';

const drawerWidth = 240;

function DashBoardHome(props) {
    const { user } = useAuth()
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Typography sx={{ textAlign: 'left', mx: 2, pt: 2 }}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                    <Home />
                </Link>
            </Typography>
            {/* Nested Navigation Dashboard */}
            <List>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}`} style={{ textDecoration: 'none', color: 'white' }}>
                            My Orders
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}/addNewWatch`} style={{ textDecoration: 'none', color: 'white' }}>
                            Add New Watch
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}/manageWatches`} style={{ textDecoration: 'none', color: 'white' }}>
                            Manage Watches
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}/manageAllOrders`} style={{ textDecoration: 'none', color: 'white' }}>
                            Manage All Orders
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'white' }}>
                            Make Admin
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: 'white' }}>
                            Pay
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText style={{ color: 'white' }}>
                        <Link to={`${url}/review`} style={{ textDecoration: 'none', color: 'white' }}>
                            Review
                        </Link>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="App" sx={{ display: 'flex' }}>

            <AppBar
                position="fixed"
                elevation="0"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Welcome!! {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    elevation="0"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.main' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block', },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.main', border: 'none' }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, my: 5, pt: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* Dashboard Routes */}
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addNewWatch`}>
                        <AddNewWatch></AddNewWatch>
                    </Route>
                    <Route path={`${path}/manageWatches`}>
                        <ManageWatches></ManageWatches>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

export default DashBoardHome;
