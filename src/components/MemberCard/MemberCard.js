import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
   
  return (
    <div className="column">
      <Link to={`/member/${member.memberId}`}>
        <div className="card">
          <img src={member.image225x275} alt={`${member.firstName} ${member.lastName}`}></img>
          <h4>{member.shortTitle} {member.firstName} {member.lastName} ({member.party})</h4>
        </div>
      </Link>
    </div>  
  );
};

export default connect(null, null)(MemberCard);