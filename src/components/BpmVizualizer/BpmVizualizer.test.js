import React from 'react'
import { create } from 'react-test-renderer'
import BpmVizualizer from '.'

test('renders correctly', () => {
  const component = create(<BpmVizualizer  bpm={128} />)
  expect(component.toJSON()).toMatchSnapshot()
})