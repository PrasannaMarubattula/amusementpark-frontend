import { Container, Typography } from '@mui/material'
import React from 'react'
import GetAllTickets from './GetAllTickets';

const Ticket = () => {

    return (
        <Container maxWidth='sm' >
            <Typography
                variant='h3'
                align='center'
                className='mt-3 mb-2'
                sx={{ fontWeight: 'bold', color: '#2196f3', fontStyle: 'italic' }}
            >
                Ticket Details
            </Typography>
            <GetAllTickets />
        </Container>
    )
}

export default Ticket