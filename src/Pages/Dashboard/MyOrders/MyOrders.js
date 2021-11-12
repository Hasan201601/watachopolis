import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../Hooks/useAuth';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        alert('Deleted successfully')
                    }
                })
        }
    }

    return (
        <Paper elevation="0" sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
            {orders?.map((order) => (
                <Grid key={order?._id} container spacing={2} sx={{ my: 2 }}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={order?.orderedItem.img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography onClick={() => handleDeleteOrder(order._id)} sx={{ cursor: 'pointer' }} variant="body2">
                                    Remove <DeleteIcon />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))
            }

        </Paper >
    );
};

export default MyOrders;