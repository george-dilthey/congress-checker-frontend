import React from "react";
import { connect } from "react-redux";
import './MemberCard.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';



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
          <Link to={''} style={{textDecoration: 'none'}}><Button variant="outlined" size="small" sx={{ m: 1, width: 150 }}>Follow</Button></Link>
          <Link to={`/members/${member.mid}`} style={{textDecoration: 'none'}}><Button variant="contained" size="small" sx={{width: 150, textDecoration: "none" }}>Learn More</Button></Link>
        </CardContent>
      <Divider light />
      </Card>
      {/* 
        <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', textAlign: "center" }}>
          
          
          
        
          <h4>{member.shortTitle} {member.firstName} {member.lastName} ({r.party})</h4>
        
        
          
          
        </Box>
        <div className="card">
          
          <div>
            
          </div>
          
        </div>
      </Link> */}
      
    </div>  
  );
};

export default connect(null, null)(MemberCard);