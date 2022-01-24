import React from 'react'
import {
    Typography,
    CardContent,
    Card,
    CardMedia,
    Container,
    CardActionArea,
} from '@material-ui/core';

const About = () => {
    return (
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="1.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    DEMO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore illum facere, illo, velit perferendis ea quod eum dicta expedita optio harum quidem cumque aliquam libero porro consectetur vero fugit!
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Container>
    )
}

export default About