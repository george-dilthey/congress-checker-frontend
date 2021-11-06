import React from "react";
import { connect } from "react-redux";
import './MemberMapCard.css'


const MemberMapCard = ({ hoveredStateName, members }) => {
   
  const memberCards = members.filter(m => m.state_name === hoveredStateName && m.in_office === "t") 
  
  return (
    <div>
      <div className="row">
        {memberCards.map(mc =>
          <div className="column">
            <div className="card">
              <img src={mc.image_225x275}></img>
              <h4>{mc.short_title} {mc.first_name} {mc.last_name} ({mc.party})</h4>
            </div>
          </div> 
        )}  
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      members: state.membersCard
    };
  };
  
  export default connect(mapStateToProps, null)(MemberMapCard);