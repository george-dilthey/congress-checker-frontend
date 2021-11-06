import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'

const MemberCard = ({ member }) => {
   
  return (
    <div className="column">
      <div className="card">
        <img src={member.image225x275}></img>
        <h4>{member.shortTitle} {member.firstName} {member.lastName} ({member.party})</h4>
      </div>
    </div>  
  );
};

export default connect(null, null)(MemberCard);