import { NavLink } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
  
  return (
    <ul>
      <NavLink to={`/`}><li>Home</li></NavLink>
      <NavLink to={`/map`}><li>Map</li></NavLink>
    </ul>
  );
};

export default NavBar;