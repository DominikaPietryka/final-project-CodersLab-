import React, { useState } from 'react';
import './index.scss';
import NewEntry from './NewEntry';
import Calendar from './Calendar'; 

function App() {
  const [activeComponent, setActiveComponent] = useState('');

  return (
    <div className="app">
      <h1>moody</h1>
      {activeComponent === '' && (
        <>
          <button
            className="moodCheckoutBtn"
            onClick={() => setActiveComponent('newEntry')}
          >
            mood check out
          </button>
          <button
            className="moodReviewBtn"
            onClick={() => setActiveComponent('calendar')}
          >
            mood review
          </button>
        </>
      )}
      
      {activeComponent === 'newEntry' && (
        <NewEntry setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === 'calendar' && (
        <Calendar setActiveComponent={setActiveComponent} /> // Ensure you pass setActiveComponent here
      )}
  
    </div>
  );
}

export default App;