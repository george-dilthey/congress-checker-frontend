import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import MemberCard from "./MemberCard";


const MemberContainer = ({ clickedStateName, members }) => {
   
  const memberCards = members.filter(m => m.stateName === clickedStateName && m.inOffice === "t") 
  
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
    members: state.members
  };
};
  
  export default connect(mapStateToProps, null)(MemberContainer);