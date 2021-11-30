import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Bills = ({bills, bgcolor}) => {
   
  useEffect(() => {

  }, [bills])

  return (
    <Paper elevation={3} sx={{
      p: 2,
      backgroundColor: bgcolor,
      pt: 6,
      textAlign: 'center',
      height: '50vh',
      overflowY: 'auto'
      }}>
      <div><h2>Recent Bills:</h2></div>
      <>
        {bills ? bills.map(b => 
          <>
            <a target="_blank" href={b.congressdotgovUrl}>
              <ListItem button >
                <ListItemText
                  primary={b.shortTitle}
                  sx={{
                    color: 'black'
                    }}
                />
                </ListItem>
                <Divider sx={{  width: '100%', p: 0 }} component="li" />
            </a>
          </>) : null}
      </>
    </Paper>
  );
};




export default connect(null, null)(Bills);