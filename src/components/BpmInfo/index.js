import React from 'react'
import './style.css'

const BpmInfo = ({ songs }) => (
  <div>
    <h2>Songs that use this BPM:</h2>
    <ul className={'bpm-songlist'}>
      { songs.map(({ title, artist }) => (
        <li key={`${title}${artist}`} className={'bpm-songlist-info'}>{`${title} (${artist})`}</li>
      ))}
    </ul>
  </div>
)

export default BpmInfo