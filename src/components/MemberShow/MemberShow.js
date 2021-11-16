import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { Timeline } from 'react-twitter-widgets'
import { useParams } from "react-router";
import { getMember } from "../../redux/actionCreators";

const MemberShow = ({ m, getMember }) => {
  
  const mid = useParams().mid
  const latestRole = m.roles[0]
  
  useEffect(() => {
    getMember(mid)
  }, [getMember, mid])
   
  return (
    <div>
      <div className="header">
        <div>
        <img src={m.image450x550} alt={`${m.firstName} ${m.lastName}`} onError={(e)=>{
            e.target.onerror = null; 
            e.target.src=`${process.env.PUBLIC_URL}/assets/images/portrait-placeholder-grey.gif`
            e.target.className = "placeholderImage"}}></img>
        </div>
        <div className="header-text">
          <h4 className="title">{latestRole.title}</h4>
          <h1 className="name">{m.firstName} {m.middleName} {m.lastName}</h1>
        </div>
      </div>

      <div className="main">
        <div className="content"></div>
        
        <div className="twitter">
          <div className="section-title">
            <h1>Latest Tweets</h1>
          </div>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: `${m.twitterAccount}`
            }}
            options={{
              height: '700',
              chrome: "noheader"
            }}          
            renderError={_err =>
              "Could not load timeline!"
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    m: state.selectedMember
  };
};

export default connect(mapStateToProps, { getMember })(MemberShow);