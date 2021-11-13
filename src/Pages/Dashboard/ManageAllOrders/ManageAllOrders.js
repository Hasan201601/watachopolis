import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleApproveStatus = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order has been approved')
                }
            })
    }
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
                        const remainingOrders = orders.filter(watch => watch._id !== id);
                        console.log(remainingOrders)
                        setOrders(remainingOrders);
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
                            <StyledTableCell align="center" sx={{ width: "20%" }}>Order Id</StyledTableCell>
                            <StyledTableCell sx={{ width: "15%" }} align="center">Model</StyledTableCell>
                            <StyledTableCell sx={{ width: "25%" }} align="center">Email</StyledTableCell>
                            <StyledTableCell sx={{ width: "15%" }} align="center">Address</StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }} align="center">Status</StyledTableCell>
                            <StyledTableCell sx={{ width: "15%" }} align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders?.map((order) => (
                            <StyledTableRow key={order?._id}>

                                <StyledTableCell>{order?._id}</StyledTableCell>
                                <StyledTableCell align="center" >
                                    {order?.orderedItem?.title}
                                </StyledTableCell>
                                <StyledTableCell align="center" >
                                    {order?.email}
                                </StyledTableCell>
                                <StyledTableCell align="center">{order?.city}</StyledTableCell>
                                <StyledTableCell align="center">{order?.status}</StyledTableCell>
                                <StyledTableCell sx={{ cursor: 'pointer' }} align="center" >
                                    <Button onClick={() => handleApproveStatus(order._id)} variant="contained" size="small" sx={{ textTransform: 'lowercase', mr: 1 }}>approve</Button>
                                    <DeleteIcon onClick={() => handleDeleteOrder(order._id)} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;