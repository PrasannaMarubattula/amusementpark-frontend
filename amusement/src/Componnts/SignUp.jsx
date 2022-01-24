import { Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import BaseUrl from './BaseUrl';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const History = useHistory();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            lastName: "",
            mobileNumber: "",
            password: "",
            username: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max(15, 'Must be less than 15 characters'),
            email: Yup.string()
                        .email('Please enter a valid email address'),
            lastName: Yup.string()
                        .max(15, 'Must be less than 15 characters'),
            mobileNumber: Yup.string()
                        .max(10, 'Please write a valid mobile number of 10 digits')
                        .min(10, 'Please write a valid mobile number of 10 digits'),
            password: Yup.string()
                        .max(15, 'Password should not exceed 15 characters')
                        .min(8, 'Password should have altleast 8 characters'),
            username: Yup.string()
                        .max(15, 'Must be less than 15 characters')
        }),
        onSubmit: (values) => {
            console.log(values);
            insertCustomerDetails(formik.values);
            History.push('/customer');
        }
    });

    const insertCustomerDetails = (data) => {
        axios.post(`${BaseUrl}/addCustomer`, data).then( 
            (response) => {
                console.log(response);
                console.log("Success");
            },
            (error) => {
                console.log(error);
                console.log("Error");
            }
        )
    }

    return (
        <Container className='mt-5' maxWidth="md" >
            <Grid
                container spacing={1}
                sx={{
                    height: "20rem",
                    borderRadius: "10px",
                    boxShadow: '5px 10px 18px #888888',
                    height: 'fit-content'
                }}
            >
                <Grid
                    item xs={5} className=''
                    sx={{
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                        backgroundColor: '#2196f3'
                    }}
                >
                    <div className='signUp' align='center'>
                        <Typography variant="h3" gutterBottom component="div">
                            Welcome Back!
                        </Typography>
                        <Typography variant="body2" align='center' gutterBottom>
                            To keep connected with us please
                            login with your personal info
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
                            <Link style={{color: '#fff', textDecoration: 'none'}} to='/' >SIGN IN</Link>
                        </Button>
                    </div>
                </Grid>
                <Grid
                    item xs={7}
                    sx={{
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px'
                    }}
                >
                    <div>
                        <Typography variant="h3" align='center' gutterBottom component="div">
                            Create Account
                        </Typography>
                        <Stack
                            direction="row" spacing={1}
                            sx={{
                                border1: '2px solid black',
                                paddingLeft: '11.5rem'
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
                            or use your email for registration
                        </Typography>
                        <form onSubmit={formik.handleSubmit} className='mb-2'>
                            <TextField
                                className='my-2 mx-2'
                                required
                                type='text'
                                id="firstName"
                                label="FirstName"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            {
                                formik.errors.firstName ? <Typography sx={{color:'red'}} variant="caption" display="block" gutterBottom>
                                {formik.errors.firstName}
                              </Typography> : null
                            }
                            <TextField
                                className='my-2 mx-2'
                                required
                                type='text'
                                id="lastName"
                                label="LastName"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                            {
                                formik.errors.lastName ? <Typography sx={{color:'red'}} variant="caption" display="block" gutterBottom>
                                {formik.errors.lastName}
                              </Typography> : null
                            }
                            <TextField
                                className='my-2 mx-2'
                                required
                                type='text'
                                id="username"
                                label="UserName"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {
                                formik.errors.username ? <Typography sx={{color:'red'}} variant="caption" display="block" gutterBottom>
                                {formik.errors.username}
                              </Typography> : null
                            }
                            <TextField
                                className='my-2 mx-2'
                                required
                                type='email'
                                id="email"
                                label="Email"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {
                                formik.errors.email ? <Typography sx={{color:'red'}} variant="caption" display="block" gutterBottom>
                                {formik.errors.email}
                              </Typography> : null
                            }
                            <TextField
                                className='my-2 mx-2'
                                required
                                type='text'
                                id="mobileNumber"
                                label="Mobile"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.mobileNumber}
                            />
                            {
                                formik.errors.mobileNumber ? <Typography sx={{color:'red'}} variant="caption" display="block" gutterBottom>
                                {formik.errors.mobileNumber}
                              </Typography> : null
                            }
                            <TextField
                                className='my-2 mx-2'
                                required
                                type='password'
                                id="password"
                                label="Password"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {
                                formik.errors.password ? <Typography sx={{color:'red'}} variant="caption" display="block" gutterBottom>
                                {formik.errors.password}
                              </Typography> : null
                            }
                            <Stack direction="row" spacing={1} sx={{paddingLeft: '9.5rem'}} >
                                <Button
                                    type='submit'
                                    variant='contained'
                                    sx={{
                                        borderRadius: '25px'
                                    }}
                                >
                                        SIGN UP
                                </Button>
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
                            </Stack>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
        
    );
};

export default SignUp;