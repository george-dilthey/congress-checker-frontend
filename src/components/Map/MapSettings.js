import React from "react";
import {setCongressNumber, setChamber} from '../../redux/actionCreators'
import { connect } from "react-redux";
import './Map.css'


const MapSettings = ({setCongressNumber, setChamber, chamber, congressNumber}) => {
   
  const handleNumberChange = (e) => {
    e.preventDefault()
    setCongressNumber(e.target.value)
  }

  const handleChamberChange = (e) => {
    e.preventDefault()
    setChamber(e.target.value)
  }

  return (
    <div className="settings-container">
      <h4>This is where you can set up your settings.</h4>
      <div className="setting">
        <div className="title">  
          <h5>Congress Number:</h5>
        </div>
        <div className = "options">   
          <select value={ congressNumber } onChange={e => {handleNumberChange(e)}}>
            <option value="117">117 (2021-2022)</option>
            <option value="116">116 (2019-2020)</option>
            <option value="115">115 (2017-2018)</option>
            <option value="114">114 (2015-2016)</option>
            <option value="113">113 (2013-2014)</option>
            <option value="112">112 (2011-2012)</option>
            <option value="111">111 (2009-2010)</option>
            <option value="110">110 (2007-2008)</option>
            <option value="109">109 (2005-2006)</option>
            <option value="108">108 (2003-2004)</option>
            <option value="107">107 (2001-2002)</option>
            <option value="106">106 (1999-2000)</option>
            <option value="105">105 (1997-1998)</option>
            <option value="104">104 (1995-1996)</option>
            <option value="103">103 (1993-1994)</option>
            <option value="102">102 (1991-1992)</option>
            <option value="101">101 (1989-1990)</option>
            <option value="100">100 (1987-1988)</option>
          </select>
        </div>
      </div>
      <div className="setting">
        <div className="title">  
          <h5>Chamber:</h5>
        </div>
        <div className = "options">   
          <select value={ chamber } onChange={e => {handleChamberChange(e)}}>
            <option value="senate">Senate</option>
            <option value="house">House</option>
          </select>
        </div>
      </div>
    </div>  
  );
};

const mapStateToProps = state => {
  return {
    congressNumber: state.congressNumber,
    chamber: state.chamber
  };
};

export default connect(mapStateToProps, { setCongressNumber, setChamber })(MapSettings);