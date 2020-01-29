import bpmData from '../resources/data/bpm.json'

export const bpmInfo = bpmData.reduce((info, current) => {
  const [title, artist, bpm] = current
  if (info[bpm]) {
    info[bpm].push({artist, title})
  } else {
    info[bpm] = [{artist, title}]
  }

  return info
}, {})

export const supportedBpms = Object.keys(bpmInfo).map(bpm => Number(bpm))

export const beatLength = bpm => 60 / bpm
