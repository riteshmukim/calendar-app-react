import React from "react";

import DayCard from './day/day-card';

function Calendar({ persons, year }) {

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  // create filtered persons list for all the days and sort youngest to oldest
  const filterPersonsList = (persons, days, year) => {
    const personsList = [];
    days.map((day, i) => personsList.push(persons.filter(person => {
      let birthday = new Date(person.birthday);
      birthday.setFullYear(year);
      return birthday.getUTCDay() === i;
    }).sort((a, b) => new Date(b.birthday) - new Date(a.birthday))
    ));
    return personsList;
  }

  const filteredList = filterPersonsList(persons, days, year);

  return (
    <div className="calendar">
      {
        days.map((day, i) =>
          <DayCard
            persons={filteredList[i]}
            title={day}
            key={i}
          />
        )
      }
    </div>
  );
}

export default Calendar;