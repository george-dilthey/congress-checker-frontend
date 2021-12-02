import './App.css';
import Map from './components/Map/Map.js';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MemberShow from './components/MemberShow/MemberShow';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import AccountContainer from './components/Account/AccountContainer';
import { showLoader, hideLoader } from './loader';
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators';
import Footer from './components/NavBar/Footer';
import PrivateRoute from './PrivateRoute';

function App({autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/map" element={<Map hideLoader={hideLoader} showLoader={showLoader} />} />
        <Route path="/members/:mid" element= {<MemberShow />} />
        <Route path="/signup" element= {<SignUp />} />
        <Route path="/signin" element= {<SignIn />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <AccountContainer />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin} )(App); 