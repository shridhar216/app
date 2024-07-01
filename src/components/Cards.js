import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../download.jpg';
import Avatar from '@mui/material/Avatar';

export default function ImgMediaCard() {
  return (
    <Card sx={{ width: 230 ,  mt: 5 , height: 250  }}  >
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        
        image={image}
        sx={{ borderRadius: '50%' }}
      /> */}
      
      <Avatar alt="image" src={image} sx={{height: "75px" , width: "75px"}} />
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Liza {}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Trainee Engineer
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
