import './App.css';
import Map from './components/Map/Map.js';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MemberShowContainer from './containers/MemberShowContainer/MemberShowContainer';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/members/:mid" element= {<MemberShowContainer />} />
      </Routes>
    </div>
  );
}

export default connect(null, null)(App);