import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import Paper from '@mui/material/Paper';



const Stat = ({ stat, statText, bgcolor }) => {
   
  useEffect(() => {

  })

  return (
    <Paper elevation={3} sx={{
      p: 2,
      backgroundColor: bgcolor,
      pt: 6,
      textAlign: 'center',
      height: '20vh',
    }}>
      <div><h1>{stat}</h1></div>
      <div><h4>{statText}</h4></div>
    </Paper>
  );
};

export default connect(null, null)(Stat);