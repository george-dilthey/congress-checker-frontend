import React from "react";
import { connect } from "react-redux";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './Home.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomeContainer = () => {

  return (
    <div className='home'>
      <div className='header'>
        <div className='icon'><AccountBalanceIcon fontSize='inherit' /></div>
        <h1>Congress Checker</h1>
        <h3>Check in on Congress.</h3>
        <div className='buttons'>
          <Link to={`/map`} ><Button variant="contained" size="large" sx={{width: 150, textDecoration: "none" }}>View Map</Button></Link>
        </div>
      </div>
      
    </div>  
  );
};

export default connect(null, null)(HomeContainer);