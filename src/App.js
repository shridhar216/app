
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
      img: "../images/5.jpg"
    },
    {
      name: "Prince Kumar",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
     
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },

    {
      name: "Karnam Sai Krishna",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/21.jpg"
    }, 

    {
      name: "Sanjeev Kumar Sahoo",
      post: "Project Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/29.jpg"
    },

    {
      name: "Ganesh Landge",
      post: "Project Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/34.jpg"
    },

    {
      name: "Mohammad Shabab",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Monish C",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Srikant kumar",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Polaki Lakshmi Narayana",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Boda Balajiganesh",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Singampalli Naresh",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Senapathi Naidu",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Pulipati Kanaka Durga Prasad",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Dabbakuti Tempo Sai Nadh",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Gujja Uma Shankar",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Guntupalli Ajay Chowdary",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Molleti Bala Murali",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Medisetti Kasu",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    },
    {
      name: "Polimera Sri Uma Venkata Charishma",
      post: "Trainee Engineer",
      TE: "TE No. :82002286",
      SBU: "SDC-Vizag",
      img: "../images/19.jpg"
    }
  ];

//  const {name , post} = obj;
  return (
    <div className="App">
    
     
      <ResponsiveAppBar/>
      <Grid container rowSpacing={2} columnSpacing={2}>
      {data.map(element => {

        return (
         <Grid item md={2}>
          <Card>
          <ImgMediaCard prop = {element} />
          </Card>
         </Grid> 
        );

      })}
      </Grid> 

      
  
   
    </div>
  );
}

export default App;
