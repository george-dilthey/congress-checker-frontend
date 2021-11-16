import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import { Link } from "react-router-dom";

const MemberCard = ({ member, r }) => {
   
  return (
    <div className="column">
      <Link to={`/members/${member.mid}`}>
        <div className="card">
          <img src={member.image225x275} alt={`${member.firstName} ${member.lastName}`} onError={(e)=>{
            e.target.onerror = null; 
            e.target.src=`${process.env.PUBLIC_URL}/assets/images/portrait-placeholder-grey.gif`
            e.target.className = "placeholderImage"}}></img>
          <h4>{member.shortTitle} {member.firstName} {member.lastName} ({r.party})</h4>
        </div>
      </Link>
    </div>  
  );
};

export default connect(null, null)(MemberCard);