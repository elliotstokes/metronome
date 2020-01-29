import React from "react"
import './style.css'
import { beatLength } from '../../config/bpm'

const BpmVizualizer = ({ bpm }) => (
    <div className={'bpm-container'}>
      <div className={'bpm-pulse circle'} style={{animationDuration: `${beatLength(bpm)}s`}} />
      <div className={'bpm-label circle'}>{bpm}</div>
    </div>
  )

export default BpmVizualizer