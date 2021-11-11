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
        <img src={m.image225x275} alt={`${m.firstName} ${m.lastName}`}></img>
        <h4 className="title">{m.title}</h4>
        <h2 className="name">{m.firstName} {m.middleName} {m.lastName}</h2>
        <div className="header-stats">
          <div className="stat">
            <h1>{m.missedVotes}</h1>
            <h5>Missed Votes</h5>
          </div>
          <div className="stat">
            <h1>{m.totalVotes}</h1>
            <h5>Total Votes</h5>
          </div>
          <div className="stat">
            <h1>{m.votesWithPartyPct}%</h1>
            <h5>Votes with Party</h5>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="content"></div>
        <div className="twitter">
          <h2>Latest Tweets</h2>
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