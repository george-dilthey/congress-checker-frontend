import React from "react";
import { connect } from "react-redux";
import './AuthModal.css'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AuthContainer from "./AuthContainer";

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


const AuthModal = ({user}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFollow = () => console.log('hi')
   
  return (
    <div>
      {user.email ? 
        <Button onClick={handleFollow} variant="outlined" size="small" sx={{ m: 1, width: 150 }}>Follow</Button> : 
        <Button onClick={handleOpen} variant="outlined" size="small" sx={{ m: 1, width: 150 }}>Follow</Button>
      }
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(AuthModal);