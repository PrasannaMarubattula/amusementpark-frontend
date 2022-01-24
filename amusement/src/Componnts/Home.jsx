import { Container, Box } from '@mui/material'
import React, { useState } from 'react'
import SignIn from './SignIn'

const Home = () => {

    return (
        <div>
            <Container className='mt-5' maxWidth="md" >
                <SignIn/>
            </Container>
        </div>
    )
}

export default Home