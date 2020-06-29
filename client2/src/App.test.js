import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Clickers from './components/Clickers';

afterEach(cleanup);

test('renders count comp correctly', () => {
  const { getByTestId } = render(<Clickers />);

  expect(getByTestId('count')).toHaveTextContent(0);

})

test('increments count', () => {
  const { getByTestId, getByText } = render(<Clickers />);

  fireEvent.click(getByText('Increase'))

  expect(getByTestId('count')).toHaveTextContent(1);

})

// test('decrements count', async () => {
//   const { getByTestId, getByText } = render(<Clickers />);

//   fireEvent.click(getByText('Decrease'))

//   const count = getByTestId('count');

//   await waitFor(() => getByText(-1))

//   await waitFor(() => {
//     return expect(count).toHaveTextContent(-1)
//   });

// })
