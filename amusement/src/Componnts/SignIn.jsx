import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <Grid
            container spacing={1}
            sx={{
                height: "20rem",
                borderRadius: "10px",
                boxShadow: '5px 10px 18px #888888',
                height: 'fit-content'
            }}
        >
            <Grid item xs={8}>
                <div>
                <Typography variant="h3" align='center' gutterBottom component="div">
                        Sign In
                    </Typography>
                    <Stack
                        direction="row" spacing={1}
                        sx={{
                            border1: '2px solid black',
                            paddingLeft: '13.5rem'
                        }}
                    >
                        <IconButton>
                            <FacebookIcon color='primary' />
                        </IconButton>
                        <IconButton>
                            <GoogleIcon color='error' />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon color='primary' />
                        </IconButton>
                    </Stack>
                    <Typography align='center' >
                        or use your email account
                    </Typography>
                    <form className='mb-2'>
                        <TextField sx={{width: '90%'}} className='my-2 mx-2' required type='text' id="outlined-basic" label="UserName" variant="outlined" />
                        <TextField sx={{width: '90%'}} className='my-2 mx-2' required type='password' id="outlined-basic" label="Password" variant="outlined" />
                        <Stack direction="row" spacing={1} sx={{paddingLeft: '9.5rem'}} >
                        {/* <Link style={{color: '#fff', textDecoration: 'none'}} to='/customer'> */}
                        <Link style={{color: '#fff', textDecoration: 'none'}} to='/activitylist'>
                            <Button
                                type='submit'
                                variant='contained'
                                sx={{
                                    borderRadius: '25px'
                                }}
                            >
                                
                                    SIGN IN
                                
                            </Button></Link>
                            <Button
                                type='reset'
                                variant='contained'
                                color='warning'
                                sx={{
                                    borderRadius: '25px'
                                }}
                            >
                                RESET
                            </Button>
                            <Link style={{color: '#fff', textDecoration: 'none'}} to='/adminlogin'>
                                <Button
                                    type='button'
                                    variant='contained'
                                    color='error'
                                    sx={{
                                        borderRadius: '25px'
                                    }}
                                >
                                    ADMIN
                                </Button>
                            </Link>
                            
                        </Stack>
                    </form>
                </div>
            </Grid>
            <Grid
                item xs={4}
                sx={{
                    backgroundColor: '#2196f3',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px'
                }}
            >
                <div className='signIn' align='center'>
                    <Typography variant="h3" gutterBottom component="div">
                        New Here!
                    </Typography>
                    <Typography variant="body2" align='center' gutterBottom>
                        Enter your personal details
                        and start your journey with us!
                    </Typography>
                    <Button
                        variant='outlined'
                        sx={{
                            borderRadius: '25px',
                            color: '#fff',
                            border: '1px solid #fff',
                            marginTop: '1rem'
                        }}
                    >
                        <Link style={{color: '#fff', textDecoration: 'none'}} to='/signup' >SIGN UP</Link>
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default SignIn;