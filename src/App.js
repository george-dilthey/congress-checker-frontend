import './App.css';
import Map from './components/Map/Map.js';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MemberShow from './components/MemberShow/MemberShow';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';

function App({user}) {
  console.log(user)

  const loader = document.querySelector('.loader');

  const showLoader = () => loader.classList.remove('hide');
  const hideLoader = () => loader.classList.add('hide');

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/map" element={<Map hideLoader={hideLoader} showLoader={showLoader} />} />
        <Route path="/members/:mid" element= {<MemberShow />} />
        <Route path="/signup" element= {<SignUp />} />
        <Route path="/signin" element= {<SignIn />} />


      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, null)(App); 