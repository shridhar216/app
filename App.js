import './App.css';
import React from 'react'
import { useState } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import ImgMediaCard from './components/Cards.js'
import Grid from '@mui/material/Grid';
import { PriceChange, ReplyTwoTone } from '@mui/icons-material';
import { Card } from '@mui/material';

function App() {
  // const [res, setRes] = useState('');
  const data = [
    {
      id : 82002286,
      name: "Shridhar Ravada",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/a.jpg`
    },
    {
      name: "Prince Kumar",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/b.jpg`
    },

    {
      name: "Karnam Sai Krishna",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/c.jpg`
    }, 

    {
      name: "Sanjeev Kumar Sahoo",
      post: "Project Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/d.jpg`
    },

    {
      name: "Ganesh Landge",
      post: "Project Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/e.jpg`
    },

    {
      name: "Mohammad Shabab",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/f.jpg`
    },
    {
      name: "Monish C",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/g.jpg`
    },
    {
      name: "Srikant kumar",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/h.jpg`
    },
    {
      name: "Lakshmi Narayana",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/i.jpg`
    },
    {
      name: "Boda Balajiganesh",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/j.jpg`
    },
    {
      name: "Singampalli Naresh",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/k.jpg`
    },
    {
      name: "Senapathi Naidu",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/l.jpg`
    },
    {
      name: "Kanaka Durga Prasad",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/m.jpg`
    },
    {
      name: "Tempo Sai Nadh",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/n.jpg`
    },
    {
      name: "Gujja Uma Shankar",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/o.jpg`
    },
    {
      name: "G Ajay Chowdary",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/p.jpg`
    },
    {
      name: "Molleti Bala Murali",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/q.jpg`
    },
    {
      name: "Medisetti Kasu",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/r.jpg`
    },
    {
      name: "Polimera Charishma",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: `/image/s.jpg`
    },
    {
      name: "Vignesh",
      post: "Trainee Engineer",
      TE: "TE No. :411415",
      SBU: "SDC-Vizag",
      img: `/image/s.jpg`
    },
    {
      name: "swapna",
      post: "Trainee Engineer",
      TE: "TE No. :411396",
      SBU: "SDC-Vizag",
      img: `/image/s.jpg`
    }
  ];
//   const images = require.context('./images', false);
//   const imageList = images.keys().map(image => images(image));

// imageList.map((image, index) => (
//   data[index].src = image.default
// ))
 
//  const {name , post} = obj;
  return (
    <div className="App">
    {/* <div>
      {imageList.map((image, index) => (
        <img key={index} src={image.default} alt={`image-${index}`} />
      ))}
    </div> */}
     
      <ResponsiveAppBar/>
      <Grid container rowSpacing={2} columnSpacing={2}>
      {data.map(element => {
       
        return (
         <Grid item md={2} sm={1} lg={2}>
          <Card>
          <ImgMediaCard prop = {element } />
          </Card>
         </Grid> 
        );

      })}
      </Grid> 

      
  
   
    </div>
  );
}

export default App;
