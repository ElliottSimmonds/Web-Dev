import React from 'react';
import logo from './logo.svg';
import './App.css';
import DaysCompleted from './components/daysCompleted'
import Tile from './components/tile'
import ProgressBar from './components/progressBar'

function App() {

  const style = {
    "width": "50%",
    "background-color": "white"
  }

  return (
    <div style={style}>
      <Tile>
        <DaysCompleted days={15} />
        <ProgressBar percent={50}></ProgressBar>
      </Tile>
    </div>
  );
}

export default App;
