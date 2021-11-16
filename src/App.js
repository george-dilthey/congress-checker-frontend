import './App.css';
import Map from './components/Map/Map.js';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MemberShow from './components/MemberShow/MemberShow';

function App() {

  const loader = document.querySelector('.loader');

  const showLoader = () => loader.classList.remove('hide');
  const hideLoader = () => loader.classList.add('hide');

  return (
    <div>
      
      <NavBar />
      <Routes>
        <Route path="/map" element={<Map hideLoader={hideLoader} showLoader={showLoader} />} />
        <Route path="/members/:mid" element= {<MemberShow />} />
      </Routes>
    </div>
  );
}

export default connect(null, null)(App);