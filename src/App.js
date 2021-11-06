import './App.css';
import Map from './components/Map/Map.js'
import { getMembersCard } from './redux/actionCreators';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";


function App({getMembersCard}) {

  useEffect(() => getMembersCard())

  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default connect(null, { getMembersCard })(App);