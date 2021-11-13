import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { pink, blue } from '@mui/material/colors';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: pink[500],
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const ManageWatches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/watches")
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    const handleDeleteWatch = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/watches/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingWatches = watches.filter(watch => watch._id !== id);
                        console.log(remainingWatches)
                        setWatches(remainingWatches);
                        alert('Deleted successfully')
                    }
                })
        }
    }
    return (
        <div>
            <TableContainer elevation="0" sx={{ p: 4 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Product Id</StyledTableCell>
                            <StyledTableCell>Model</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {watches?.map((watch) => (
                            <StyledTableRow key={watch?._id}>

                                <StyledTableCell align="left">{watch?._id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {watch?.title}
                                </StyledTableCell>
                                <StyledTableCell align="left">{watch?.price}</StyledTableCell>
                                <StyledTableCell align="center" ><DeleteIcon sx={{ color: blue[700], cursor: 'pointer' }} onClick={() => handleDeleteWatch(watch._id)} /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageWatches;