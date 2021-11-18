import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { Timeline } from 'react-twitter-widgets'
import Paper from '@mui/material/Paper';



const TwitterTimeline = ({ handle }) => {
   
  useEffect(() => {

  }, [handle])

  return (
    <Paper elevation={3} sx={{
      p: 2,
      backgroundColor: '#fff',
      textAlign: 'center',
      height: '60vh',
    }}>
      <Timeline
        key={handle}
        dataSource={{
          sourceType: 'profile',
          screenName: handle
        }}
        options={{ chrome: "nofooter", height: "55vh" }}        
        renderError={_err =>
          "Could not load timeline!"
        }
      />
    </Paper>
  );
};

export default connect(null, null)(TwitterTimeline);