import './App.css';
import Map from './components/Map/Map.js';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MemberShow from './components/MemberShow/MemberShow';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/member/:congress/:memberId" element= {<MemberShow />} />
      </Routes>
    </div>
  );
}

export default connect(null, null)(App);