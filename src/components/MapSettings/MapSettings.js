import React from "react";
import { connect } from "react-redux";
import './MapSettings.css'

const MapSettings = () => {
   
  return (
    <div className="settings">
      This is where you can set up your settings<br></br>
    </div>  
  );
};

export default connect(null, null)(MapSettings);