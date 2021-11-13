import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Watch from '../../Home/Watch/Watch';

const CatalogWatches = () => {
    const [watches, setWatches] = useState([]);
    console.log(watches)

    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    return (
        <div className="App">
            <Container sx={{ pt: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            watches.map(watch => <Watch
                                key={watch._id}
                                watch={watch}
                            ></Watch>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default CatalogWatches;