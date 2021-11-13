import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../Hooks/useAuth';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { pink, blue } from '@mui/material/colors';
import { Box } from '@mui/system';



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
        fetch(`https://blooming-refuge-00817.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://blooming-refuge-00817.herokuapp.com/orders/${id}`
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
        <Box>
            {!orders?.length ?
                <h2>You haven't placed any order yet!</h2>
                :
                <Paper sx={{ p: 1, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                    {orders?.map((order) => (
                        <Grid key={order?._id} container spacing={2} sx={{ my: 2 }}>
                            <Grid item xs={12} md={4}>
                                <ButtonBase >
                                    <Img alt="complex" sx={{ maxWidth: '200px' }} src={order?.orderedItem.img} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} md={8} container sx={{ p: 2 }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {order?.orderedItem.title}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            {order?.email}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: {order?._id}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography onClick={() => handleDeleteOrder(order._id)} sx={{ color: blue[700], cursor: 'pointer' }} variant="body2">
                                            Remove <DeleteIcon />
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Typography variant="h6" component="div">
                                        ${order?.orderedItem.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                    }

                </Paper >
            }
        </Box>
    );
};

export default MyOrders;