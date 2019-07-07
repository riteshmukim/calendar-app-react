import React, { Component } from "react";

import Calendar from './components/calendar/calendar';
import "./App.css";
import persons from './data/persons-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personData: persons,
      yearToFindCalender: new Date().getFullYear(),
      isPersonsDataError: false
    };
  }

  // validate persons json input & update data of persons and year on click of update button  
  handleDataUpdate = event => {
    event.preventDefault();
    const { personData, year } = event.target.elements;
    try {
      const persons = JSON.parse(personData.value);
      this.setState({
        personData: persons,
        yearToFindCalender: parseInt(year.value),
        isPersonsDataError: false
      })
    } catch (error) {
      this.setState({
        isPersonsDataError: true
      })
    }
  }

  render() {
    const { personData, yearToFindCalender, isPersonsDataError } = this.state;

    return (
      <div className='App'>
        <div className='heading'>
          Work Area
      </div>
        <Calendar
          persons={personData}
          year={yearToFindCalender}
        />
        <form onSubmit={this.handleDataUpdate} className='person_data_form'>
          <div className="left_text_area">
            <textarea className={`edit_persons ${isPersonsDataError ? 'error' : ''}`}
              name='personData' id='personData'
              defaultValue={JSON.stringify(personData, null, '\t')}
              required
            />
          </div>

          <div className='right_area'>
            <label>Year</label>
            <input type='number' name='year' id='year' min='1' max='9999' defaultValue={yearToFindCalender} required/>
            <button type='submit' className='update_button' id='updateButton'>UPDATE</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
