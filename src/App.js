import './App.css';
import Map from './components/Map/Map.js';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MemberShow from './components/MemberShow/MemberShow';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/member/:congress/:memberId" element= {<MemberShow />} />
      </Routes>
    </div>
  );
}

export default connect(null, null)(App);