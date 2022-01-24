import { Fingerprint } from '@mui/icons-material';
import { Button, Container, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    return (
        <Container className='mt-5' maxWidth='sm' >
            <form>
                <Typography
                    variant='h3'
                    align='center'
                    className='my-5'
                    sx={{ fontWeight: 'bold', color: '#2196f3', fontStyle: 'italic' }}
                >
                    ADMIN LOGIN
                </Typography>
                <TextField className='mt-3' fullWidth type='text'  id="outlined-basic" label="Username" variant="outlined" />
                <TextField className='mt-3' fullWidth type='password' id="outlined-basic" label="Password" variant="outlined" />
                <Button className='mt-3' variant='contained' >
                    <Link style={{color: '#fff', textDecoration: 'none'}} to='/admin' >
                        LOGIN
                    </Link>
                </Button>
            </form>
        </Container>
    );
};

export default AdminLogin;