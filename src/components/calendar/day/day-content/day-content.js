import React from "react";

import materialColor from './color-generator';

function DayContent({ persons }) {

  // size of the square box of individual person capped to max 4 in a row for better visibility
  const sizeOfPerson = (100 / Math.min(Math.ceil(Math.sqrt(persons.length)),4)) + '%';

  // function to get initials of a person like 'RM' for Ritesh Mukim
  const getInitials = name => {
    let initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }

  return (
    <ul className={persons.length > 0 ? '' : 'day--empty'} >
      {
        persons.length > 0 &&
        persons.map((person, i) => {
          const { name, birthday } = person;
          const currentPersonsStyle = {
            height: sizeOfPerson,
            width: sizeOfPerson,
            backgroundColor: materialColor() //dynamic background color generation
          };

          return <li
            key={i}
            style={currentPersonsStyle}
            title={name + ' - ' + birthday}>
            {getInitials(name)}
          </li>;
        })
      }
    </ul>
  );
}

export default DayContent;