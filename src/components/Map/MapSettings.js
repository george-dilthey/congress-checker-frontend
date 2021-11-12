import React from "react";
import {setCongressNumber} from '../../redux/actionCreators'
import { connect } from "react-redux";
import './Map.css'


const MapSettings = ({setCongressNumber, congressNumber}) => {
   
  const handleChange = (e) => {
    e.preventDefault()
    setCongressNumber(e.target.value)
  }

  return (
    <div className="settings-container">
      <h4>This is where you can set up your settings.</h4>
      <div className="setting">
        <div className="title">  
          <h5>Congress Number:</h5>
        </div>
        <div className = "options">   
          <select value={ congressNumber } onChange={e => {handleChange(e)}}>
            <option value="117">117</option>
            <option value="116">116</option>
            <option value="115">115</option>
            <option value="114">114</option>
          </select>
        </div>
      </div>
      <div className="setting">
        <div className="title">  
          <h5>Congress:</h5>
        </div>
        <div className = "options">   
          <select value={ congressNumber } onChange={e => {handleChange(e)}}>
            <option value="Senate">117</option>
            <option value="House">116</option>
          </select>
        </div>
      </div>
    </div>  
  );
};

const mapStateToProps = state => {
  return {
    congressNumber: state.congressNumber
  };
};

export default connect(mapStateToProps, { setCongressNumber })(MapSettings);