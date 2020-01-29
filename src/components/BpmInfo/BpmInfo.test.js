import React from 'react'
import { create } from 'react-test-renderer'
import BpmInfo from '.'
import { bpmInfo, supportedBpms } from '../../config/bpm'

test('renders correctly when empty', () => {
  const component = create(<BpmInfo songs={[]} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('renders correctly with songs', () => {
  const component = create(<BpmInfo songs={bpmInfo[supportedBpms[0]]} />)
  expect(component.toJSON()).toMatchSnapshot()
})