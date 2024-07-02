
import './App.css';
import React from 'react'
import { useState } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import ImgMediaCard from './components/Cards.js'
import Grid from '@mui/material/Grid';
import { PriceChange, ReplyTwoTone } from '@mui/icons-material';

function App() {
  // const [res, setRes] = useState('');
  const obj = [
    {
      name: "Shridhar Ravada",
      post: "Trainee Engineer"
    },
    {
      name: "Prince Kumar",
      post: "Trainee Engineer"
    }
  ];

//  const {name , post} = obj;
  return (
    <div className="App">
    
     
      <ResponsiveAppBar/>
      <Grid container spacing={2}>
      {obj.map(el => {

        return (
         <Grid item>
         <ImgMediaCard prop = {el} />
         </Grid> 
        );

      })}
      </Grid> 

      
  
   
    </div>
  );
}

export default App;
