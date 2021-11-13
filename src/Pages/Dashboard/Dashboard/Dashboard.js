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
import { Avatar, Container, Divider, Grid, Paper, Stack } from '@mui/material';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { pink, blue, green } from '@mui/material/colors';
import './Dashboard.css'
import AdminRoute from '../../AdminRoute/AdminRoute';

const drawerWidth = 270;

function DashBoardHome(props) {
    const { user, admin, logOut } = useAuth()
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ padding: '15px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Avatar alt="Travis Howard" src={user.photoURL} />
                <Typography variant="h6" sx={{ color: 'white', ml: 1 }} component="div">
                    Welcome!! <br />{user.displayName}
                </Typography>
            </Box>
            <Typography variant="h6" sx={{ textAlign: 'left', mx: 2, pt: 2 }}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                    <Home /> Home
                </Link>
            </Typography>
            <Divider sx={{ color: 'white', mt: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", mt: 5 }}>
                <DashboardSharpIcon sx={{ color: 'white', mt: 1 }} ></DashboardSharpIcon>
                <Typography sx={{ color: 'white', mt: 1 }}>DashBoard</Typography>
            </Box>
            {/* Nested Navigation Dashboard */}
            <List>
                {
                    !admin ?
                        <ListItem button >
                            <Link to={`${url}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemText style={{ color: 'white' }}>
                                    My Orders
                                </ListItemText>
                            </Link>
                        </ListItem> :
                        <ListItem button >
                            <Link to={`${url}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemText style={{ color: 'white' }}>
                                    Manage All Orders
                                </ListItemText>
                            </Link>
                        </ListItem>

                }

                {
                    admin ?
                        <Box>
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
                                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'white' }}>
                                        Make Admin
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </Box> :
                        <Box>
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
                        </Box>
                }
                <ListItem onClick={logOut} button >
                    <ListItemText style={{ color: 'white' }}>
                        LogOut <LogoutSharpIcon />
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
                    backgroundColor: 'transparent'
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
                        <MenuIcon sx={{ color: blue[800] }} />
                    </IconButton>

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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(180deg, rgba(165,164,180,1) 0%, rgba(77,106,199,1) 0%, rgba(9,68,121,1) 86%)' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block', },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(180deg, rgba(165,164,180,1) 0%, rgba(77,106,199,1) 0%, rgba(9,68,121,1) 86%)' }
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
                    {!admin ?
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route> :
                        <Route exact path={path}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>

                    }
                    {!admin ?
                        <Box>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                        </Box> :
                        <Box>
                            <AdminRoute path={`${path}/addNewWatch`}>
                                <AddNewWatch></AddNewWatch>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageWatches`}>
                                <ManageWatches></ManageWatches>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Box>

                    }


                </Switch>
            </Box>
        </Box >
    );
}

export default DashBoardHome;
