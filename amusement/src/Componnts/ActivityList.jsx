import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  ticketBtn: {
    borderRadius: 20,
    background: 'linear-gradient(to left, #23074d, #cc5333)',
    color: 'white',
    border: 'none',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15,
    cursor: 'pointer',
    fontSize: 12,
    boxShadow: '0px 2px 2px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 8%), 0px 1px 5px 0px rgb(0 0 0)',
    '&:hover': {
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0)',
        background: 'linear-gradient(to right, #23074d, #cc5333)'
      },
  },

  headingStyles: {
      fontSize: 12,
      fontWeight: 'normal',
  }
});

const baseURL = `http://localhost:8080/api/getAllActivities`;

const ActivityList = () => {

    const [activity, setActivity] = useState([]);

    useEffect( () => {
        axios.get(baseURL).then( response => {
            setActivity(response.data);
        })
    }, []);

  const classes = useStyles();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'linear-gradient(to right, #23074d, #cc5333)' }}
    >
        <Box sx={{width: 800, ml: 'auto', mr: 'auto', mb: 15, mt: 10, color: 'white', fontWeight:'normal',display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
            <Typography gutterBottom variant="h6" component="div">
                The Ultimate 
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
                ADVENTURE
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                in One Place
            </Typography>
            <Typography className={classes.headingStyles} gutterBottom>
                The loudest, craziest, and the most amazing part of town. This simply is not just an amusement park, but a world of breath-taking charm. It's a place to celebrate the smaller moments and share big wonders.
            </Typography>
            <Link to='/insertticket'>
                <button className={classes.ticketBtn}>BOOK TICKET</button>
            </Link>
        </Box>

        {/* Image gallery */}
        <Box component="section" sx={{mb: 10}}>
            <ImageList cols={4}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    sx={{height: 200}}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                    <ImageListItemBar
                    title={item.title}
                    />
                </ImageListItem>
            ))}
            </ImageList>
        </Box>

        {/* Activity List */}
        <Container>
        <Grid container spacing={4} sx={{marginBottom: 60}}>
        {
        activity.map((act, index) => {
            return (
                <Grid item xs={3}>
                    <Box key={index} sx={{background: 'white',borderRadius: 2 ,minHeight: 400, Width: 100, display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        <img alt='Activity' style={{height: 150, width: 150, borderRadius: '50%',marginTop: -30, border: '3px solid white'}} src='https://i.pinimg.com/236x/6a/22/6a/6a226a4ce628ae1530cf461dbc06cd38.jpg' />
                        <Card elevation={0}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" textAlign="center" component="div">
                            {act.activityName}
                            </Typography>
                            <Typography variant="caption" textAlign="center" color="textSecondary" gutterBottom component="div">
                                {act.description}
                            </Typography>
                            </CardContent>
                        </Card>
                        <button variant="contained" className={classes.btn} >{act.charges}</button>
                    </Box>
                </Grid>
                )
            })
            }                   
            </Grid>
        </Container>
    </Box>
  );
};

const itemData = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tqZ4V2qq1HfmX2KKdtM0N1Fuo1pXN9h-ZA&usqp=CAU',
        title: 'Gaint Wheel',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5P0F2kS1DsQpjU9bEsmfzaCyWYwWpgeQNA&usqp=CAU',
        title: 'Hang Glider',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuCu4tElxGdOEl5ZTI9qdblXmxqwD4gztcg&usqp=CAU',
        title: 'Termite Coater',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BfldpuEReqjLNXjA5yzPJMoKld87pDiTgw&usqp=CAU',
        title: 'Pirate Ship',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDxc_a7GF0_21F__yuIY40qf5SuwThFe3bA&usqp=CAU',
        title: 'Kids Pool',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEwU_lrNMU2C41kFSoRYa1ZsnCrcgkNKM4g&usqp=CAU',
        title: 'Hurricane Swing',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ98yzhb98moxhYtXbbAsckeryIMBxsBIww&usqp=CAU',
        title: 'Drop Loop',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWL57WMpuqb80WZGTwpdPeALAZilLaz4KNQ&usqp=CAU',
        title: 'Jungle Lagoon',
    },
];

export default ActivityList;