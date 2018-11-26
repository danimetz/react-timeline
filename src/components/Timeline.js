import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timeline = props.events.map((event,index) => {
    return <TimelineEvent
      person={event.person}
      status={event.status}
      timeStamp={event.timeStamp}
      key={index}
      />
    });
  // Fill in your code here
  return(
    <section className="timeline">
      {timeline}
    </section>
  );
}

export default Timeline;
