import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { Timeline } from 'react-twitter-widgets'


const MemberShow = ({ m }) => {
  
  
  useEffect(() => {
  })
  
  return (
    <div>
      <div className="header">
        <div>
          <img src={m.image450x550} alt={`${m.firstName} ${m.lastName}`}></img>
        </div>
        <div className="header-text">
          <h4 className="title">{m.title}</h4>
          <h1 className="name">{m.firstName} {m.middleName} {m.lastName}</h1>
        </div>
      </div>
  
      <div className="header-stats">
        <div className="stat">
          <h2>{m.missedVotes}</h2>
          <h5>Missed Votes</h5>
        </div>
        <div className="stat">
          <h2>{m.totalVotes}</h2>
          <h5>Total Votes</h5>
        </div>
        <div className="stat">
          <h2>{m.votesWithPartyPct}%</h2>
          <h5>Votes with Party</h5>
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

export default connect(null, null)(MemberShow);