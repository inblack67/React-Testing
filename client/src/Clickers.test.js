import React from 'react';
import { render, cleanup, fireEvent, wait, waitFor } from '@testing-library/react';
import Clickers from './Clickers';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

// it('displays count', () => {
//     const { getByTestId } = render(<Clickers />);
//     expect(getByTestId('count')).toHaveTextContent(0);
// })

// it('increments count', () => {
//     const { getByTestId, getByText } = render(<Clickers />);

//     fireEvent.click(getByText('Increase'));

//     expect(getByTestId('count')).toHaveTextContent(1);
// })

it('decrements count async', async () => {
    const { getByTestId, getByText } = render(<Clickers />);

    fireEvent.click(getByText('Decrease')); 

    const countSpan = await waitFor(() => {
        return getByText('-1');
    });

    expect(countSpan).toHaveTextContent('-1');
})