import './App.css';
import Map from './components/Map/Map.js'
import { getMembersCard } from './redux/actionCreators';
import { connect } from "react-redux";

function App({getMembersCard}) {

  getMembersCard()

  return (
    <div>
      <Map />
    </div>
  );
}

export default connect(null, { getMembersCard })(App);