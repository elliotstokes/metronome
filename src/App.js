import React, { useState } from 'react';
import BpmVizualizer from './components/BpmVizualizer'
import BpmSelector from './components/BpmSelector'
import BpmInfo from './components/BpmInfo'
import { supportedBpms, bpmInfo } from './config/bpm'
import './App.css';

function App() {
  const [bpm, setBpm] = useState(supportedBpms[0])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Metronome</h1>
      </header>

      <BpmVizualizer bpm={bpm} />
      <BpmSelector selectedBpm={bpm} onSelectBpm={setBpm} />
      <BpmInfo songs={bpmInfo[bpm]} />
    </div>
  );
}

export default App;
