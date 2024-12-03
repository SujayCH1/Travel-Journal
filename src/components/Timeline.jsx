import React from 'react';
import data from './data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";

const Timeline = () => {
  // Function to convert date string to Date object
  const parseDate = (dateStr) => {
    const startDate = dateStr.split('-')[0].trim();
    return new Date(startDate);
  };

  // Sort the data array by dates
  const sortedData = [...data].sort((a, b) => {
    const dateA = parseDate(a.dates);
    const dateB = parseDate(b.dates);
    return dateA - dateB;
  });

  return (
    <div className="Timeline">
      <VerticalTimeline>
        {sortedData.map(location => (
          <VerticalTimelineElement
            key={location.id}
            date={location.dates}
            iconStyle={{ background: 'salmon', color: '#fff' }}
          >
            <h3 className="timeline-title">{location.title}</h3>
            <p className="timeline-country">{location.country}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;