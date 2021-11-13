import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Watch = ({ watch }) => {
    const { img, title, price, _id, description } = watch;
    const history = useHistory();
    const goToPurchase = (id) => {
        history.push(`/purchase/${id}`);
    }
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card elevation={3} sx={{ maxWidth: 345, backgroundColor: 'aliceblue' }}>
                <CardMedia
                    component="img"
                    sx={{ height: '250px', objectFit: 'cover' }}
                    image={img}
                    alt="watch"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ fontWeight: '500' }} className="Titillium" component="div">
                        {title}
                    </Typography>
                    <Typography className="Titillium" variant="body2" color="text.secondary">
                        {description?.slice(0, 150)}...
                    </Typography>
                    <Typography className="Titillium" variant="h6" sx={{ pt: 2 }}>
                        Price: ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="Titillium" onClick={() => goToPurchase(_id)} sx={{ background: 'linear-gradient(90deg, rgba(165,164,180,1) 0%, rgba(30,48,106,1) 0%, rgba(30,161,207,0.981127485173757) 100%)', border: '2px solid #A99577', borderRadius: '0', marginTop: '10px', transition: 'all ease-in-out 0.2s', color: 'white', mb: 3, width: '100%' }}>BUY NOW</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Watch;