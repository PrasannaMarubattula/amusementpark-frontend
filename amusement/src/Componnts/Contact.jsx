import { Button } from '@material-ui/core'
import { Container, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    return (
        <Container maxWidth="sm">
            <Typography
                variant='h3'
                align='center'
                className='my-5'
                sx={{ fontWeight: 'bold', color: '#2196f3', fontStyle: 'italic' }}
            >
                Contact us
            </Typography>
            <form>
                <TextField
                    label='Name'
                    type='text'
                    fullWidth
                    required
                    className='mb-3'
                />
                <TextField
                    label='Email'
                    type='email'
                    fullWidth
                    required
                    className='mb-3'
                />
                <TextField
                    label='Message'
                    fullWidth
                    required
                    multiline
                    rows={4}
                    className='mb-3'
                />
                <Button onClick={() => alert('Thank you for contacting us. We will get in touch with you soon!')} type='submit' variant='outlined' color='primary'>SEND <SendIcon /> </Button>
            </form>
        </Container>
    )
}

export default Contact