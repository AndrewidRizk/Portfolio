import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrUserWorker } from "react-icons/gr";

const MyTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<GrUserWorker />}
      >
        <h3 className="vertical-timeline-element-title">Work Title 1</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name 1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2008 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<GrUserWorker />}
      >
        <h3 className="vertical-timeline-element-title">Work Title 2</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name 2</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2005 - 2008"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<GrUserWorker />}
      >
        <h3 className="vertical-timeline-element-title">Work Title 3</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name 3</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2002 - 2005"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<GrUserWorker />}
      >
        <h3 className="vertical-timeline-element-title">Work Title 4</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name 4</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default MyTimeline;
