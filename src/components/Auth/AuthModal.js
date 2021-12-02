import React from "react";
import { connect } from "react-redux";
import './AuthModal.css'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AuthContainer from "./AuthContainer";
import FollowButton from "../Account/FollowButton";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AuthModal = ({member}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   
  return (
    <div>
      <FollowButton handleOpen={handleOpen} member={member} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AuthContainer />
        </Box>
      </Modal>
    </div>  
  );
};

export default connect(null, null)(AuthModal);