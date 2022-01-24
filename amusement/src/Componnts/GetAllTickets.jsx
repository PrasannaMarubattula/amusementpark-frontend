import { Button, Container, Paper, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BaseUrl from './BaseUrl';
import { Toast } from 'bootstrap';
import { Link } from 'react-router-dom';

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

const BaseURL = `http://localhost:8080/api/getAllTickets`;

const columns = ['Ticket-ID', 'Bill', 'Date-Time', 'Activity-ID', 'User-ID', 'Action'];

const GetAllTickets = () => {

    const [ticket, setTicket] = useState([]);

    useEffect( () => {
        axios.get(BaseURL).then( (response) => {
            setTicket(response.data);
            console.log(response.data);
        });
    }, []);

    const deleteTicket = (ticket_id) => {
        axios
            .delete(`${BaseUrl}/deleteTicketById/${ticket_id}`)
            .then( (response) => {
                Toast.success('Deleted!');
            },
            (error) => {
                Toast.error("Error!");
            })
    }

    return (
        <TableContainer className='mb-5' component={Paper} >
                <Table  aria-label="customized table" >
                    <TableHead>
                        <TableRow>
                            {
                                columns.map( (name, indx) => {
                                    return (
                                        <StyledTableCell align="center" key={indx} >{name}</StyledTableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            ticket.map( (tic, indx) => {
                                return (
                                    <StyledTableRow key={indx+1} >
                                        <StyledTableCell align="left">{tic.ticketId}</StyledTableCell>
                                        <StyledTableCell align="left">{tic.bill}</StyledTableCell>
                                        <StyledTableCell align="left">{tic.dateTime}</StyledTableCell>
                                        <StyledTableCell align="left">{tic.activity.activityId}</StyledTableCell>
                                        <StyledTableCell align="left">{tic.customer.userId}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            <Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete" color='error' onClick={() => {
                                                    deleteTicket(tic.ticketId)
                                                }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                <Link to='/updateticket' >
                                                    <IconButton aria-label="delete" color='warning'>
                                                        <BorderColorIcon />
                                                    </IconButton>
                                                </Link>
                                            </Stack>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default GetAllTickets