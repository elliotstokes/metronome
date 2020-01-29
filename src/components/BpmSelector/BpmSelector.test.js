import React from 'react'
import { create } from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import { supportedBpms } from '../../config/bpm'
import BpmSelector from '.'

test('renders correctly', () => {
  const component = create(<BpmSelector selectedBpm={supportedBpms[0]} onSelectBpm={jest.fn()} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('selecting a bpm calls the handler', () => {
  const onSelectBpmMock = jest.fn()
  const component = render(<BpmSelector selectedBpm={supportedBpms[0]} onSelectBpm={onSelectBpmMock} />)
  fireEvent.click(component.getByText('138 BPM'))
  expect(onSelectBpmMock).toBeCalledWith(138)
})