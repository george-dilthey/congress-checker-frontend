import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { Timeline } from 'react-twitter-widgets'


const TwitterTimeline = ({ handle }) => {
   
  useEffect(() => {

  }, [handle])

  return (
    <Timeline
      key={handle}
      dataSource={{
        sourceType: 'profile',
        screenName: handle
      }}
      options={{
        height: '700',
        chrome: "noheader"
      }}          
      renderError={_err =>
        "Could not load timeline!"
      }
    />
  );
};

export default connect(null, null)(TwitterTimeline);