import React from 'react'
import { supportedBpms } from '../../config/bpm'
import './style.css'

const BpmVizualizer = ({selectedBpm, onSelectBpm}) => (
  <div className={'bpm-selector'}>
    {supportedBpms.map(bpm => (
    <div key={bpm}>
      <button className={`bpm-button${bpm === selectedBpm ? ' bpm-selected' : ''}`} onClick={()=> onSelectBpm(bpm) }>{`${bpm} BPM`}</button>
    </div>))}
  </div>
)

export default BpmVizualizer