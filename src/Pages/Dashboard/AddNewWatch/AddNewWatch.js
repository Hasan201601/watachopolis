import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddNewWatch = () => {
    const { register, handleSubmit, reset } = useForm();
    const [successful, setSuccessful] = useState(false)
    const onSubmit = data => {
        setSuccessful(false)
        console.log(data)
        fetch("https://blooming-refuge-00817.herokuapp.com/watches", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(() => setSuccessful(true))
        reset()
    };
    return (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', my: 5 }} onSubmit={handleSubmit(onSubmit)}>
            <TextField variant="standard" placeholder="Image Url" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} {...register("img")} />
            <TextField variant="standard" placeholder="Title" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} {...register("title")} />
            <TextField variant="standard" placeholder="price" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("price")} />
            <TextField variant="standard" placeholder="specification1" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec1")} />
            <TextField variant="standard" placeholder="specification2" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec2")} />
            <TextField variant="standard" placeholder="specification3" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec3")} />
            <TextField variant="standard" placeholder="Description" rows={3} multiline sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2, resize: 'vertical' }} type="number" {...register("description", { min: 18, max: 99 })} />
            <Button variant="contained" type="submit" >ADD WATCH</Button>
            {successful && <Alert severity="success">Product Added Successfully</Alert>}
        </Box>
    );
};

export default AddNewWatch;