import React, { useState } from 'react';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown, faMeh, faAngry } from '@fortawesome/free-solid-svg-icons';

function NewEntry({ setActiveComponent }) {
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [note, setNote] = useState('');

  const saveEntry = () => {
    const entry = { date: new Date(), emotion: selectedEmotion, note };
    localStorage.setItem('entry', JSON.stringify(entry));
    setActiveComponent('calendar');
  };

  return (
    <div className="newEntry">
      <h2>How are you?</h2>
      <div className="emotions">
      <button
          className={selectedEmotion === 'happy' ? 'selected' : ''}
          onClick={() => setSelectedEmotion('happy')}>
          <FontAwesomeIcon
            style={{ color: 'green', fontSize: '30px' }}
            icon={faSmile}/>
        </button>
        <button
          className={selectedEmotion === 'neutral' ? 'selected' : ''}
          onClick={() => setSelectedEmotion('neutral')}>
          <FontAwesomeIcon
            style={{ color: 'yellow', fontSize: '30px' }}
            icon={faMeh}/>
        </button>
        <button
          className={selectedEmotion === 'sad' ? 'selected' : ''}
          onClick={() => setSelectedEmotion('sad')}>
          <FontAwesomeIcon
            style={{ color: 'blue', fontSize: '30px' }}
            icon={faFrown}/>
        </button>
        <button
          className={selectedEmotion === 'angry' ? 'selected' : ''}
          onClick={() => setSelectedEmotion('angry')}>
          <FontAwesomeIcon
            style={{ color: 'darkred', fontSize: '30px' }}
            icon={faAngry}/>
        </button>
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button className="saveButton" onClick={saveEntry}>
        Save
      </button>
    </div>
  );
}

export default NewEntry;
