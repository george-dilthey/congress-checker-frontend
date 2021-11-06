import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'


const MemberCard = ({ member }) => {
   
  return (
    <div className="column">
      <div className="card">
        <img src={member.image_225x275}></img>
        <h4>{member.short_title} {member.first_name} {member.last_name} ({member.party})</h4>
      </div>
    </div>  
  );
};


  
export default connect(null, null)(MemberCard);