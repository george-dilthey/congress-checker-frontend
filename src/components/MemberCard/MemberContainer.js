import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import MemberCard from "./MemberCard";


const MemberContainer = ({ clickedStateName, members, congressNumber, chamber }) => {
   
  const memberCards = members.filter(m => m.stateName === clickedStateName && m.congress.toString() === congressNumber.toString() && m.chamber === chamber) 
  
  return (
    <div>
      <div className="row">
        {memberCards.map(m =>
          <MemberCard member={m} key={m.memberId} />
        )}  
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    members: state.members,
    congressNumber: state.congressNumber,
    chamber: state.chamber
  };
};
  
  export default connect(mapStateToProps, null)(MemberContainer)














