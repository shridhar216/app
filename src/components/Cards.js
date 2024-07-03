import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kappa from "../images/19.jpg";
import Avatar from '@mui/material/Avatar';
import { Chip, Grid, Stack } from '@mui/material';

export default function ImgMediaCard({prop}) {

  return (
<>
  
      <Grid container 
  direction="row"
  justifyContent="flex-end"
  alignItems="center" sx={{pb:2}}> 



      <Grid item md={2}>
      <Avatar alt="image" src={prop.img} sx={{height: "55px" , width: "55px", margin:'5px'}} />
      </Grid>

      <Grid item md={10}>
        <Stack>
        <Typography variant="body" sx={{fontWeight:'bold'}}>
          {prop.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Chip label={prop.post} font="10px" sx={{ m: 1 , height: '25%'}} />
        </Typography>
        </Stack>
      </Grid>

  
      <Grid container padding={2}>
        <Stack>
        <Typography variant="body2" color="text.secondary">
         <Chip label={prop.TE}  color="info" size="small" variant="outlined" sx={{m: 0.5, height: '20px'}}/>
        </Typography>

        <Typography variant="body2" color="text.secondary">
         <Chip label={prop.SBU}  color="success" size="small" variant="outlined" sx={{m: 0.5, height: '20px'}}/>
        </Typography>
         
        
        </Stack>

      </Grid>

<Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
  <Grid item md={5}> 
  <Button size="small"  sx={{backgroundColor:'#EAECEE', color:'#000', width:'100%'}}>Skills</Button>
  </Grid>
  <Grid item md={5}>
  <Button size="small"  sx={{backgroundColor:'#2E86C1', color:'#fff', width:'100%'}}>Profile</Button>
  </Grid>
</Grid>
</Grid>
</>
  );
}
