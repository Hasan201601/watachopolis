import { Button, TextField, Typography } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useAuth from '../../../Hooks/useAuth';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Review = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(2);
    console.log(value)
    const [hover, setHover] = React.useState(-1);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.rating = value;
        console.log(data)
    };
    return (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', my: 5 }} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" sx={{ my: 3 }}>Share Your Opinion</Typography>
            <Box
                sx={{
                    width: { lg: '45%', md: '65%', xs: '80%' },
                    my: 1,
                    mt: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}

            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.1}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    size="large"
                />
                {value !== null && (
                    <Box sx={{ ml: 4 }} >{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <Box
                sx={{
                    width: { lg: '45%', md: '65%', xs: '80%' },
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}

            >
                <TextField defaultValue={user.displayName} variant="standard" placeholder="name" sx={{ width: '48%', textAlign: 'center' }} {...register("img")} />

                <TextField defaultValue={user.email} variant="standard" placeholder="email" sx={{ ml: 1, width: '48%', textAlign: 'center' }} {...register("title")} />
            </Box>
            <TextField variant="standard" placeholder="Write Your Review" rows={3} multiline sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2, resize: 'vertical' }} type="number" {...register("age", { min: 18, max: 99 })} />
            <Button variant="contained" type="submit" >Write A Review</Button>
        </Box>
    );
};

export default Review;