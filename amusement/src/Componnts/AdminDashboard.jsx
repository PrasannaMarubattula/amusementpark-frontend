import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const StyledPaper1 = styled(Paper)({
    background: 'linear-gradient(to right,  #093028, #237a57)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '&:hover': {
        background: 'linear-gradient(to left,  #093028, #237a57)',
        color: 'white',
  },
});

const StyledPaper2 = styled(Paper)({
    background: 'linear-gradient(to right,  #2b5876, #4e4376)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '&:hover': {
        background: 'linear-gradient(to left,  #2b5876, #4e4376)',
        color: 'white',
  },
});

const StyledPaper3 = styled(Paper)({
    background: 'linear-gradient(to right,  #42275a, #734b6d)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '&:hover': {
        background: 'linear-gradient(to left,  #42275a, #734b6d)',
        color: 'white',
  },
});

// Get activity URL
const getActivityURL = `http://localhost:8080/api/getAllActivities`;

// Get customer URL
const getCustomerURL = `http://localhost:8080/api/getAllCustomers`;

// Get tickets URL
const getTicketURL = `http://localhost:8080/api/getAllTickets`;


export default function AdminDashboard() {

    // All customer related methods :
    // Get list of customers
    const [customers, setCustomers] = useState([]);
    useEffect( () => {
        axios.get(getCustomerURL).then( response => {
            setCustomers(response.data);
        })
    }, []);

    // Get list of activities
    const [activity, setActivity] = useState([]);
    useEffect( () => {
        axios.get(getActivityURL).then( response => {
            setActivity(response.data);
        })
    }, []);

    // Get list of tickets
    const [tickets, setTickets] = useState([]);
    useEffect( () => {
        axios.get(getTicketURL).then( response => {
            setTickets(response.data);
        })
    }, []);
    
    return (
        <Box>
            Dashboard
            <Box
                sx={{
                    padding: 5,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 3,
                    width: 250,
                    height: 170,
                    color: 'white',
                    fontWeight:'normal'
                    },
                }}
                >
                <StyledPaper1 elevation={15}>
                <img alt='Customer' style={{height: 45, width: 45, borderRadius: '50%',marginTop: -20, border: '3px solid white'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaeVfXxyG1sNBohvr-x5NOCzM9lvcF_pTzA&usqp=CAU' />
                    <Typography className='mb-0' variant="h1" component="div">{customers.length}</Typography>
                    <Typography variant="body2" component="div">Customers</Typography>
                </StyledPaper1>
                <StyledPaper2 elevation={15} >
                    <img alt='Ticket' style={{height: 45, width: 45, borderRadius: '50%',marginTop: -20, border: '3px solid white'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6deqFmrLHJHhBdUZgiP3qmbhsQ-EDQOEj-Q&usqp=CAU' />
                    <Typography variant="h1" component="div">{tickets.length}</Typography>
                    <Typography variant="body2" component="div">{tickets.length === 1 ? 'Ticket' : 'Tickets'}</Typography>
                </StyledPaper2>
                <StyledPaper3 elevation={15}>
                <img alt='Activity' style={{height: 45, width: 45, borderRadius: '50%',marginTop: -20, border: '3px solid white'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fEIHUd0KmS7IyM8TkorL9sYB3dO7Gt6AdA&usqp=CAU' />
                    <Typography variant="h1" component="div">{activity.length}</Typography>
                    <Typography variant="body2" component="div">{activity.length === 1 ? 'Activity' : 'Activities'}</Typography>
                </StyledPaper3>
            </Box>
    </Box>
    );
}