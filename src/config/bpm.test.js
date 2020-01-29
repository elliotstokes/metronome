import { bpmInfo, supportedBpms, beatLength } from './bpm'

test('calculates beat length', () => {
  expect(beatLength(128)).toEqual(0.46875)
})

test('getting bpm info from config', () => {
  expect(bpmInfo).toMatchSnapshot()
})

test('getting supported bpms', () => {
  expect(supportedBpms).toMatchSnapshot()
})