import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import {
    Box,
    Typography,
    CardContent,
    Card,
    CardMedia,CardActions,
    Grid,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar
} from '@material-ui/core';

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
      fontSize: 14,
      fontWeight: 'normal',
      fontColor:"white"
  },
  leftText: {
    textAlign: "left"
  },
  
  
});

const baseURL = `http://localhost:8080/api/getAllActivities`;

const AboutPage = () => {

    const [activity, setActivity] = useState([]);

    useEffect( () => {
        axios.get(baseURL).then( response => {
            setActivity(response.data);
        })
    }, []);
      const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
          zIndex: 1,
          '& .MuiImageBackdrop-root': {
            opacity: 0.15,
          },
          '& .MuiImageMarked-root': {
            opacity: 0,
          },
          '& .MuiTypography-root': {
            border: '4px solid currentColor',
          },
        },
      }));
      
      const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      });
      
      const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      }));
      
      const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      }));
      
      const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      }));
      const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;


  const classes = useStyles();

  return (
    <Box
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 40, background: 'linear-gradient(to right, #23074d, #cc5333)' }}
    >
        <Box sx={{width: 800, ml: 'auto', mr: 'auto', mb: 5, color: 'white', fontWeight:'normal'}}>
            <Typography variant="h2" component="div" >
                Ammusement Park
            </Typography>
            <Typography className={classes.headingStyles} gutterBottom>
            An amusement park is a park that features various attractions, such as rides and games, as well as other events for entertainment purposes. A theme park is a type of amusement park that bases its structures and attractions around a central theme, often featuring multiple areas with different themes. Unlike temporary and mobile funfairs and carnivals, amusement parks are stationary and built for long-lasting operation. They are more elaborate than city parks and playgrounds, usually providing attractions that cater to a variety of age groups. While amusement parks often contain themed areas, theme parks place a heavier focus with more intricately-designed themes that revolve around a particular subject or group of subjects. The loudest, craziest, and the most amazing part of town. This simply is not just an amusement park, but a world of breath-taking charm. It's a place to celebrate the smaller moments and share big wonders.
            </Typography>
        </Box>
        <Box sx={{ color: 'white', fontWeight:'normal'}}>
        <Typography variant="h5" component="div" align="left"  >
    Gallery
    </Typography>   
    </Box>
    <Box sx={{width: 800, ml: 'auto', mr: 'auto',mb: 5, color: 'white', fontWeight:'normal'}}></Box>
        {/* Image gallery */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
   <br></br>
   <Stack direction="row" spacing={1}>
          <Card  sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        height="160"
        image="https://cdn.extra.ie/wp-content/uploads/2020/09/01102350/Mask-Visor-Feature.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Wear a mask properly
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Make sure your mask covers your nose, mouth and chin.
Clean your hands before you put your mask on, before and after you take it off, and after you touch it at any time.
        </Typography>
      </CardContent>
      </Card>

<Card          
sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        height="140"
        image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Hand_Sanitizer_1296x728-header.jpg?w=1155&h=1528"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Santize Regularly
        </Typography>
        <Typography variant="body2" color="text.secondary">
        sanitizers can reduce about 97% of the bacteria on your hands. Apart from hand sanitizing, various cleaning products help keep our surroundings clean to protect us from bacteria and allergen.
        </Typography>
      </CardContent>
     </Card>


     <Card          
sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        height="160"
        image="https://media.istockphoto.com/vectors/people-ceeping-distance-in-the-queue-social-distancing-concept-for-vector-id1218816042"
        alt="social distance"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Maintain Social Distance
        </Typography>
        <Typography variant="body2" color="text.secondary">
Social distancing may seem like a drastic step to take, it’s just a precautionary measure. And if you’re practicing it, there’s still a good chance you are healthy. Otherwise, you may be placed into a quarantine situation.
        </Typography>
      </CardContent>
     </Card></Stack>

    </Box>
    
  );
}

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tqZ4V2qq1HfmX2KKdtM0N1Fuo1pXN9h-ZA&usqp=CAU',
    title: 'GiantWheel',
    width: '20%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5P0F2kS1DsQpjU9bEsmfzaCyWYwWpgeQNA&usqp=CAU',
    title: 'Hang Glider',
    width: '20%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuCu4tElxGdOEl5ZTI9qdblXmxqwD4gztcg&usqp=CAU',
    title: 'Termite Coater',
    width: '20%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BfldpuEReqjLNXjA5yzPJMoKld87pDiTgw&usqp=CAU',
    title: 'Pirate Ship',
    width: '20%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDxc_a7GF0_21F__yuIY40qf5SuwThFe3bA&usqp=CAU',
    title: 'Kids Pool',
    width: '20%',
},
{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEwU_lrNMU2C41kFSoRYa1ZsnCrcgkNKM4g&usqp=CAU',
    title: 'Hurricane Swing',
    width: '20%',
},
{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ98yzhb98moxhYtXbbAsckeryIMBxsBIww&usqp=CAU',
    title: 'Drop Loop',
    width: '20%',
},
{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWL57WMpuqb80WZGTwpdPeALAZilLaz4KNQ&usqp=CAU',
    title: 'Jungle Lagoon',
    width: '20%',
},
{
  url: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_154,w_3008,h_1692,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/bengaluru-park/dry_rides_giant_wheel_1_wonderla_amusement_parks_Bengaluru',
  title: 'SkyWheel',
  width: '20%',
},
{
  url: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_1022,h_574,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/bengaluru-park/dry_rides_crazy_wagon_1_wonderla_amusement_parks_Bengaluru',
  title: 'SkyWheel',
  width: '20%',
},
];






export default AboutPage;