import React, { useState } from 'react';
import './App.css';
import { Filter } from 'bad-words';  // Corrected import

function App() {
  const [inputText, setInputText] = useState('');
  const [isExplicit, setIsExplicit] = useState(false);

  const filter = new Filter();

  const checkContent = () => {
    const hasBadWords = filter.isProfane(inputText);
    setIsExplicit(hasBadWords);
  };

  return (
    <div className="App">
      <h1>Content Filtering System</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={checkContent}>Check Content</button>
      <p className={isExplicit ? 'explicit' : 'clean'}>
        {isExplicit ? 'Yes, contains explicit content.' : 'No, content is clean.'}
      </p>
    </div>
  );
}

export default App;
