import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReduxScoreBoard } from './components/Scoreboard'
import store from './store/index'
import addToStore from './actions/index'
import {connect} from  'react-redux'

function App(props) {
  return (
    <div>
      <ReduxScoreBoard teamOne={"Mariners"} teamTwo={"Astros"} />
    </div>
  );
}


export default connect()(App);
