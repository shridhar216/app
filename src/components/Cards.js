import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../download.jpg';
import Avatar from '@mui/material/Avatar';
import { Chip, Grid, Stack } from '@mui/material';

export default function ImgMediaCard({prop}) {


  console.log(prop);


  return (
    <Card sx={{ width: 230 ,  mt: 5 , height: 250  }}  >
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        
        image={image}
        sx={{ borderRadius: '50%' }}
      /> */}

      <Grid container padding={2} justifyContent={'center'} alignContent={'center'}> 
      <Grid item lg={4}>
      <Avatar alt="image" src={image} sx={{height: "55px" , width: "55px"}} />
      </Grid>
      <Grid item lg={8}>
        <Stack>
        <Typography variant="body" sx={{fontWeight:'bold'}}>
          {prop.name}
        </Typography>
    
        <Typography variant="body2" color="text.secondary">
             <Chip label={prop.post} font="10px" sx={{ m: 1 , height: '25%'}} />
        </Typography>

       
        </Stack>
      </Grid>
      </Grid>
      <CardActions>
        <Button size="small">Skills</Button>
        <Button size="small">Profile</Button>
      </CardActions>
    </Card>
  );
}
