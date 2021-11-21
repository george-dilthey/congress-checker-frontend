import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import AuthModal from "../Auth/AuthModal";



const MemberCard = ({ member, r }) => {
   
  return (
    <div className="column">
      <Card sx={{textAlign: 'center', marginBottom: 2}}>
        <CardContent>
          <Avatar
            alt={`${member.firstName} ${member.lastName}`}
            src={member.image225x275}
            sx={{ width: 100, height: 100, margin: "auto" }}
          />
          <h4>{member.shortTitle} {member.firstName} {member.lastName} ({r.party})</h4>
          <AuthModal />
          <Link to={`/members/${member.mid}`} ><Button variant="contained" size="small" sx={{width: 150, textDecoration: "none" }}>Learn More</Button></Link>
        </CardContent>
      <Divider light />
      </Card>
      
    </div>  
  );
};

export default connect(null, null)(MemberCard);