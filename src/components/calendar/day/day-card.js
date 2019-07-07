import React from "react";

import DayContent from './day-content/day-content'

function DayCard({ persons, title }) {
  return (
    <div className="dayBox">
      <div className="title">{title}</div>
      <DayContent persons={persons} />
    </div>
  );
}

export default DayCard;