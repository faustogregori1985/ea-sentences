// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import reducer from './store/reducer'
import initialState from './store/initialState'
import Sentences from './components/Sentences'

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('it should add a sentence on the list when the user click on the add button', () => {
  const { getByText, getByLabelText } = renderWithRedux(<Sentences parentId="111"/>)
  const input = getByLabelText('sentence-input-111');
  fireEvent.change(input, { target: { value: 'sentence 0' } })
  fireEvent.click(getByText('add new sentence'))
  expect(getByText('sentence 0')).toBeInTheDocument()
})
