
import './App.css';
import React from 'react'
import { useState } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import ImgMediaCard from './components/Cards.js'
import Grid from '@mui/material/Grid';
import { PriceChange } from '@mui/icons-material';

function App() {
  const [res, setRes] = useState('');
  const obj = [
    {
      name: "Shridhar",
      post: "Trainee Engineer"
    },
    {
      name: "Price",
      post: "Trainee Engineer"
    }
  ]


  return (
    <div className="App">
     
      
    <div>   
      <ResponsiveAppBar/>
      <Grid container spacing={2}>
      obj.forEach(el => {
         <Grid item >
         <ImgMediaCard prop= obj />
       </Grid> 
      });
    
       
        
      </Grid> 

      
  
    </div> 
    </div>
  );
}

export default App;
