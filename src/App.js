
import './App.css';
import Button from '@mui/material/Button'
import { useState } from 'react';
import React from 'react';
import Search from './Search';
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme)=>({
  btnstyle: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'black',
    border: 0,
    borderRadius: 3,
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    top: '10px',
    left: '250px',
    width: '300px'
    
  }
}));

function App() {
  const [showSearch, setShowSearch] = useState(false)
  const classes = useStyles()
  return (
    <div className="app">
       <Grid container spacing={2}>
          {showSearch && <Search />}
  
          <Button onClick={()=>setShowSearch(!showSearch)} variant='outlined' className={classes.btnstyle}>{showSearch ? "Hide" : "Search Date"}</Button>
      

    </Grid>
  
    </div>
   
       
  );
}

export default App;
