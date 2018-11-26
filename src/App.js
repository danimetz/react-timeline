import React, { Component } from 'react';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

import './App.css';
import timelineData from './data/timeline.json';

const events = [
  {
    person: 'Danielle',
    status: 'Hello World',
    timestamp: '2018-11-26'
  },
  {
    person: 'Leanne',
    status: "Maroon is the best color",
    timestamp: '2018-11-25'
  }
]
class App extends Component {
  render() {
    console.log(timelineData);
    const timelineEvents = events.map((event,index) => {
      return <TimelineEvent
        person={event.person}
        status={event.status}
        timestamp={event.timestamp}
        key={index}
        />
    });


    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's social media feed</h1>
        </header>
        <main className="App-main">
          <Timeline events = {timelineData.events}/>
        </main>
      </div>
    );
  }
}

export default App;
