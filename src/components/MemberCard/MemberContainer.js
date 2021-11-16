import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import MemberCard from "./MemberCard";


const MemberContainer = ({ clickedStateName, roles, congressNumber, chamber }) => {
   
  const memberCards = roles.filter(r => r.stateName === clickedStateName && r.congress.toString() === congressNumber.toString() && r.chamber === chamber) 
  
  return (
    <div>
      <div className="row">
        {memberCards.map(r =>
          <MemberCard r={r} member={r.member} key={r.member.mid} />
        )}  
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    roles: state.roles,
    congressNumber: state.congressNumber,
    chamber: state.chamber
  };
};
  
  export default connect(mapStateToProps, null)(MemberContainer)














