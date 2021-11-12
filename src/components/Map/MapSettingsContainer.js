import React from "react";
import {setCongressNumber} from '../../redux/actionCreators'
import { connect } from "react-redux";
import './Map.css'


const MapSettingsContainer = ({setCongressNumber, congressNumber}) => {
   
  const handleChange = (e) => {
    e.preventDefault()
    setCongressNumber(e.target.value)
  }

  return (
    <div className="settings">
      This is where you can set up your settings.<br></br>
      <label>
          Congress Number:
          <select value={ congressNumber } onChange={e => {handleChange(e)}}>
            <option value="117">117</option>
            <option value="116">116</option>
            <option value="115">115</option>
            <option value="114">114</option>
          </select>
        </label>
    </div>  
  );
};

const mapStateToProps = state => {
  return {
    congressNumber: state.congressNumber
  };
};

export default connect(mapStateToProps, { setCongressNumber })(MapSettingsContainer);