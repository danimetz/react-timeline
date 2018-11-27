import React, { Component } from 'react';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

import './App.css';
import timelineData from './data/timeline.json';

class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person}'s social media feed</h1>
        </header>
        <main className="App-main">
          <Timeline events = {timelineData.events}/>
        </main>
      </div>
    );
  }
}

export default App;
