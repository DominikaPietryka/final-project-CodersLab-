import React from 'react';
import { Calendar } from 'primereact/calendar';
import './index.scss';

function MoodCalendar({ setActiveComponent }) {

  const entry = JSON.parse(localStorage.getItem('entry'));

  return (
    <div className="calendar">
      <Calendar inline value={new Date(entry?.date)} />
      <div className="entry">
        Emotion: {entry?.emotion}
        Note: {entry?.note}
      </div>

      <button className="menuButton" onClick={() => setActiveComponent('')}>
        Menu
      </button>
      <button
        className="backButton"
        onClick={() => setActiveComponent('newEntry')}
      >
        Back
      </button>
    </div>
  );
}

export default MoodCalendar;
