import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { connect } from 'react-redux';
import { logout } from '../../redux/actionCreators';

const NavBar = ({user, logout}) => {
  
  const loggedInUser = user.email !== ""
  
  return (
    <ul>
      <NavLink to={`/`}><li>Home</li></NavLink>
      <NavLink to={`/map`}><li>Map</li></NavLink>
      {loggedInUser ? <NavLink to={`/account`}><li>Account</li></NavLink> : <NavLink to={`/signup`}><li>Sign Up</li></NavLink>}
      {loggedInUser ? <NavLink to={'/signup'} onClick={logout}><li>Logout</li></NavLink> : null}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {logout} )(NavBar);
